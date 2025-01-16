import { motion } from "framer-motion";
import "./ScrollArrow.css";

export default function ScrollDownArrow() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="scroll-arrow scroll-down"
      onClick={scrollToContent}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.span 
        className="arrow down" 
        whileHover={{ scale: 1.2 }}
      >
        ⌄
      </motion.span>
    </motion.div>
  );
}
