"use client";
import { motion } from "framer-motion";

export default function AnimationWrapper({ children, className, ...props }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: "0.8" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
