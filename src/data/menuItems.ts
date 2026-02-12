import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import vegBurger from "@/assets/veg-burger.jpg";
import pasta from "@/assets/pasta.jpg";
import fries from "@/assets/fries.jpg";
import chocolateShake from "@/assets/chocolate-shake.jpg";
import brownie from "@/assets/brownie.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "beverages" | "food" | "desserts";
}

export const menuItems: MenuItem[] = [
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 250,
    description: "Rich espresso topped with velvety steamed milk foam and a dusting of cocoa.",
    image: cappuccino,
    category: "beverages",
  },
  {
    id: "latte",
    name: "Café Latte",
    price: 280,
    description: "Smooth espresso blended with creamy steamed milk, finished with delicate latte art.",
    image: latte,
    category: "beverages",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    price: 300,
    description: "Chilled coffee blended with ice and cream for the perfect refreshing pick-me-up.",
    image: coldCoffee,
    category: "beverages",
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    price: 550,
    description: "Classic thin-crust pizza with San Marzano tomatoes, fresh mozzarella, and basil.",
    image: margheritaPizza,
    category: "food",
  },
  {
    id: "veg-burger",
    name: "Veg Burger",
    price: 350,
    description: "Hearty plant-based patty with fresh lettuce, tomato, and our house special sauce.",
    image: vegBurger,
    category: "food",
  },
  {
    id: "pasta",
    name: "Creamy Pasta",
    price: 450,
    description: "Al dente pasta tossed in a rich, creamy parmesan sauce with fresh herbs.",
    image: pasta,
    category: "food",
  },
  {
    id: "fries",
    name: "Crispy Fries",
    price: 200,
    description: "Golden crispy fries seasoned with herbs, served with ketchup and aioli.",
    image: fries,
    category: "food",
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Shake",
    price: 320,
    description: "Thick and creamy chocolate milkshake topped with whipped cream and chocolate drizzle.",
    image: chocolateShake,
    category: "desserts",
  },
  {
    id: "brownie",
    name: "Chocolate Brownie",
    price: 250,
    description: "Warm, fudgy brownie with a crisp top and gooey center, dusted with powdered sugar.",
    image: brownie,
    category: "desserts",
  },
];
