"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { ReactNode } from "react";

type CheckoutButtonProps = {
  className: string;
  children: ReactNode;
};

export default function CheckoutButton({
  className,
  children,
}: CheckoutButtonProps) {
  return (
    <a
      href="https://book.stripe.com/dRm3cu855gCJabMg8icEw00"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        sendGAEvent("event", "begin_checkout", {
          value: 5999,
          currency: "MXN",
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}