import { motion } from "framer-motion";
import "./ScrollArrow.css";

export default function ScrollUpArrow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="scroll-arrow scroll-up"
      onClick={scrollToTop}
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.span 
        className="arrow up"
        whileHover={{ scale: 1.2 }}
      >
        ⌃
      </motion.span>
    </motion.div>
  );
} 