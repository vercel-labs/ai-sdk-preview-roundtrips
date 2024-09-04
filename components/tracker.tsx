"use client";

import { TrackingInformation } from "./data";
import { BoxIcon, GPSIcon, HomeIcon } from "./icons";
import { motion } from "framer-motion";

export const Tracker = ({
  trackingInformation,
}: {
  trackingInformation: TrackingInformation;
}) => {
  return (
    <div className="flex flex-col gap-6 md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full justify-between">
      <motion.div
        className="flex flex-col justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-sm">
          Tracking Order {trackingInformation.orderId}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="size-8 text-blue-50 rounded-full flex-shrink-0 flex flex-row justify-center items-center"
          initial={{ background: "#f4f4f5" }}
          animate={{ background: "#3b82f6" }}
          transition={{ delay: 0.5 }}
        >
          <BoxIcon size={14} />
        </motion.div>
        <div className="h-2 bg-zinc-100 w-full rounded-lg relative">
          <motion.div
            className="h-2 bg-blue-500 rounded-lg z-10 absolute"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6 }}
          />
        </div>

        <motion.div
          className="size-8 text-blue-50 rounded-full flex-shrink-0 flex flex-row justify-center items-center"
          initial={{ background: "#f4f4f5" }}
          animate={{ background: "#3b82f6" }}
          transition={{ delay: 0.8 }}
        >
          <span style={{ transform: "translateX(-1.25px) translateY(1px)" }}>
            <GPSIcon size={14} />
          </span>
        </motion.div>

        <div className="h-2 bg-zinc-100 w-full rounded-lg relative">
          <motion.div
            className="h-2 bg-blue-500 rounded-lg z-10 absolute"
            initial={{ width: 0 }}
            animate={{ width: "71%" }}
            transition={{ delay: 0.9 }}
          />
        </div>
        <div className="size-8 bg-zinc-100 text-zinc-500 rounded-full flex-shrink-0 flex flex-row justify-center items-center">
          <HomeIcon size={14} />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="text-sm">{trackingInformation.progress}</div>
        <div className="text-sm text-zinc-500">
          {trackingInformation.description}
        </div>
      </motion.div>
    </div>
  );
};
