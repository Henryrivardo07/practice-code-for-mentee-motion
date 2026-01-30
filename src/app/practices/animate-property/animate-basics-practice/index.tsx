import { ArrowRight, ArrowUp, Maximize2, Rotate3D } from "lucide-react";
import { motion } from "motion/react";

export const AnimateBasicsPractice = () => {
  return (
    <div className="grid-cols2 grid gap-80 md:grid-cols-4">
      <div className="flex flex-col items-center space-y-lg">
        {/* geser kanan */}
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ x: 30 }}
          className="flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 text-white"
        >
          <ArrowRight className="size-24" />
        </motion.div>

        <span className="text-neutral-400 text-xs-regular">Move Right</span>
      </div>

      <div className="flex flex-col items-center space-y-lg">
        {/* geser atas */}
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ y: -20 }}
          className="flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
        >
          <ArrowUp className="size-24" />
        </motion.div>

        <span className="text-neutral-400 text-xs-regular">Move Up</span>
      </div>

      <div className="flex flex-col items-center space-y-lg">
        {/* scale */}
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ scale: 1.3 }}
          className="flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white"
        >
          <Maximize2 className="size-24" />
        </motion.div>

        <span className="text-neutral-400 text-xs-regular">Scale</span>
      </div>

      <div className="flex flex-col items-center space-y-lg">
        {/* rotate */}
        <motion.div
          transition={{ duration: 0.5, repeat: Infinity }}
          animate={{ rotate: 360 }}
          className="flex size-60 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white"
        >
          <Rotate3D className="size-24" />
        </motion.div>

        <span className="text-neutral-400 text-xs-regular">Rotate</span>
      </div>
    </div>
  );
};
