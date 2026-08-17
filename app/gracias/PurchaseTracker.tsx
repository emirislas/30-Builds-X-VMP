"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

type PurchaseTrackerProps = {
  transactionId: string;
};

export default function PurchaseTracker({
  transactionId,
}: PurchaseTrackerProps) {
  useEffect(() => {
    sendGAEvent("event", "purchase", {
      transaction_id: transactionId,
      value: 5999,
      currency: "MXN",
      items: [
        {
          item_id: "30-builds-vmp",
          item_name: "30 Builds × VMP",
          price: 5999,
          quantity: 1,
        },
      ],
    });
  }, [transactionId]);

  return null;
}