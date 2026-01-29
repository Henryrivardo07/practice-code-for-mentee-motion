import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const AnimateBasicsPractice = () => {
  return (
    <div className="grid-cols2 grid gap-80 md:grid-cols-4">
      <div className="flex flex-col items-center space-y-lg">
        {/* geser kanan */}
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ x: 200 }}
          className="flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 text-white"
        >
          <ArrowRight className="size-24" />
        </motion.div>

        <span className="text-neutral-400 text-xs-regular">Move Right</span>
      </div>
    </div>
  );
};
