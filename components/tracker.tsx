"use client";

import { TrackingInformation } from "./data";
import { BoxIcon, GPSIcon, HomeIcon, InvoiceIcon } from "./icons";
import { motion } from "framer-motion";

const getColorFromProgress = ({
  progress,
  type,
}: {
  progress: string;
  type: "foreground" | "text";
}) => {
  switch (progress) {
    case "Shipped":
      return type === "foreground" ? "#a1a1aa" : "#fafafa";
    case "Out for Delivery":
      return type === "foreground" ? "#3b82f6" : "#eff6ff";
    case "Delivered":
      return type === "foreground" ? "#10b981" : "#f0fdf4";
    default:
      return type === "foreground" ? "#f4f4f5" : "#71717a";
  }
};

export const Tracker = ({
  trackingInformation,
}: {
  trackingInformation: TrackingInformation;
}) => {
  const { progress } = trackingInformation;

  return (
    <div className="my-4 flex flex-col gap-6 md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full justify-between">
      <motion.div
        className="flex flex-col justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.0 }}
      >
        <div className="flex flex-row gap-2 items-center text-sm text-zinc-500 dark:text-zinc-400">
          <div>Tracking Order</div>
          <InvoiceIcon size={14} />
          <div>{trackingInformation.orderId}</div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-row items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className="size-8 text-blue-50 rounded-full flex-shrink-0 flex flex-row justify-center items-center"
          initial={{ background: "#f4f4f5" }}
          animate={{
            background: getColorFromProgress({
              progress,
              type: "foreground",
            }),
            color: getColorFromProgress({
              progress,
              type: "text",
            }),
          }}
          transition={{ delay: 0.2 }}
        >
          <BoxIcon size={14} />
        </motion.div>
        <div className="h-2 bg-zinc-100 w-full rounded-lg relative dark:bg-zinc-700">
          <motion.div
            className="h-2 rounded-lg z-10 absolute"
            initial={{ width: 0, background: "#f4f4f5" }}
            animate={{
              width:
                progress === "Delivered"
                  ? "100%"
                  : progress === "Out for Delivery"
                    ? "100%"
                    : progress === "Shipped"
                      ? "34%"
                      : "0%",
              background: getColorFromProgress({
                progress,
                type: "foreground",
              }),
            }}
            transition={{ delay: 0.3 }}
          />
        </div>

        <motion.div
          className="size-8 text-blue-50 rounded-full flex-shrink-0 flex flex-row justify-center items-center"
          initial={{ background: "#f4f4f5" }}
          animate={{
            background:
              progress === "Shipped"
                ? "#f4f4f5"
                : getColorFromProgress({
                    progress,
                    type: "foreground",
                  }),
            color:
              progress === "Shipped"
                ? "#71717a"
                : getColorFromProgress({
                    progress,
                    type: "text",
                  }),
          }}
          transition={{ delay: 0.4 }}
        >
          <span style={{ transform: "translateX(-1.25px) translateY(1px)" }}>
            <GPSIcon size={14} />
          </span>
        </motion.div>

        <div className="h-2 bg-zinc-100 w-full rounded-lg relative dark:bg-zinc-700">
          <motion.div
            className="h-2 rounded-lg z-10 absolute"
            initial={{ width: 0, background: "#f4f4f5" }}
            animate={{
              width:
                progress === "Delivered"
                  ? "100%"
                  : progress === "Out for Delivery"
                    ? "71%"
                    : "0%",
              background: getColorFromProgress({
                progress,
                type: "foreground",
              }),
            }}
            transition={{ delay: 0.5 }}
          />
        </div>
        <motion.div
          className="size-8 bg-zinc-100 text-zinc-500 dark:text-zinc-400 rounded-full flex-shrink-0 flex flex-row justify-center items-center"
          initial={{
            background: "#f4f4f5",
            color: "#71717a",
          }}
          transition={{ delay: 0.5 }}
          animate={{
            background: ["Out for Delivery", "Shipped"].includes(progress)
              ? "#f4f4f5"
              : getColorFromProgress({
                  progress,
                  type: "foreground",
                }),
            color: ["Out for Delivery", "Shipped"].includes(progress)
              ? "#71717a"
              : getColorFromProgress({
                  progress,
                  type: "text",
                }),
          }}
        >
          <HomeIcon size={14} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-between items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-sm">{progress}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {trackingInformation.description}
        </div>
      </motion.div>
    </div>
  );
};
