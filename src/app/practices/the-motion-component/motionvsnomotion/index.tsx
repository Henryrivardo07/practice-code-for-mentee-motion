import { motion } from "motion/react";
import { useState } from "react";

export const MotionVsNoMotion = () => {
  const [motionClicked, setMotionClicked] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* component tanpa motion */}
      <div className="space-y-4">
        <h2 className="text-center font-bold text-white">No Motion</h2>
        <button
          onClick={() => {
            alert("Clicked but no motion");
          }}
          type="button"
          className="w-full cursor-pointer rounded-2xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 p-8 text-left shadow-xl"
        >
          <div className="mb-4 text-4xl">📦</div>
          <h3 className="mb-2 font-bold text-2xl text-white">Click Me</h3>
          <p className="text-white/80">
            Card ini menggunakan regular component tanpa animasi
          </p>
        </button>
      </div>

      {/* component dengan motion */}
      <motion.div
        animate={{
          x: motionClicked ? 100 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="space-y-4"
      >
        <h2 className="text-center font-bold text-white">With Motion</h2>
        <button
          onClick={() => setMotionClicked(!motionClicked)}
          type="button"
          className="w-full cursor-pointer rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 text-left shadow-xl"
        >
          <div className="mb-4 text-4xl">🚀</div>
          <h3 className="mb-2 font-bold text-2xl text-white">Click Me</h3>
          <p className="text-white/80">Card ini motion dengan animasi</p>
        </button>
      </motion.div>
    </div>
  );
};
