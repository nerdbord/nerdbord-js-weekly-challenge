import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        backgroundColor: "#CED0FC",
        color: "#6A6EF7",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scaleX: 1.6,
        scaleY: 1.2
      }}
      className="bg-[#6A6EF7] text-[#CED0FC] px-8 py-2 rounded-full"
    >
      {text}
    </motion.button>
  );
};

export default Button;
