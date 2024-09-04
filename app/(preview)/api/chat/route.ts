import { getOrders, getTrackingInformation, ORDERS } from "@/components/data";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const stream = await streamText({
    model: openai("gpt-4o"),
    system: "you are a friendly assistant",
    messages,
    maxToolRoundtrips: 5,
    tools: {
      listOrders: {
        description: "list all orders",
        parameters: z.object({}),
        execute: async function ({}) {
          const orders = getOrders();
          return orders;
        },
      },
      viewTrackingInformation: {
        description: "view tracking information for a specific order",
        parameters: z.object({
          orderId: z.string(),
        }),
        execute: async function ({ orderId }) {
          const trackingInformation = getTrackingInformation({ orderId });
          return trackingInformation;
        },
      },
    },
  });

  return stream.toDataStreamResponse();
}
