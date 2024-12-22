import React from "react";
import { DiPython} from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconvarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center my-20"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconvarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconvarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <DiPython className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconvarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconvarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconvarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-blue-500" />
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Technologies;
