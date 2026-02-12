import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface RevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
  once?: boolean;
}

const variantMap = { fadeUp, fadeIn, scaleIn };

export const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  once = true,
}: RevealProps) => (
  <motion.div
    variants={variantMap[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export const StaggerReveal = ({ children, className, once = true }: StaggerProps) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
