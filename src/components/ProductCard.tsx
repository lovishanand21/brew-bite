import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menuItems";
import { toast } from "sonner";

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-accent">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
