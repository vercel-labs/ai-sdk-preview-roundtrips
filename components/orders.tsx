"use client";

import { motion } from "framer-motion";
import { InvoiceIcon } from "./icons";
import Image from "next/image";
import { format } from "date-fns";

export const Orders = ({ orders }: { orders: any[] }) => {
  return (
    <div className="flex flex-col gap-4 md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full">
      {orders.map((order, index) => (
        <motion.div
          className="flex flex-row gap-4 items-center"
          key={order.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index }}
        >
          <div className="size-12 bg-zinc-200 flex-shrink-0 rounded-lg">
            <Image
              src={`/${order.image}`}
              alt={order.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg"
            />
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="text-sm">{order.name}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Ordered {format(new Date(order.orderedAt), "dd LLL, yyyy")}
              </div>
            </div>

            <div className="flex flex-col flex-start">
              <div className="flex flex-row gap-2 items-center">
                <div className="text-zinc-400">
                  <InvoiceIcon size={14} />
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {order.id}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
