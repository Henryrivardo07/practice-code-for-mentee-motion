import { motion } from "motion/react";

export const ExamplePractice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-xl text-white shadow-xl"
    >
      <h4 className="text-lg-semibold">Welcome to initial property</h4>
      <p className="text-sm-regular">This element</p>
    </motion.div>
  );
};
