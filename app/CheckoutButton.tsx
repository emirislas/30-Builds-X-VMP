"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { ReactNode } from "react";

type CheckoutButtonProps = {
  className: string;
  children: ReactNode;
};

const CHECKOUT_URL =
  "https://book.stripe.com/dRm3cu855gCJabMg8icEw00";

export default function CheckoutButton({
  className,
  children,
}: CheckoutButtonProps) {
  const handleCheckout = () => {
    sendGAEvent("event", "begin_checkout", {
      currency: "MXN",
      value: 5999,
      items: [
        {
          item_id: "30-builds-vmp",
          item_name: "30 Builds × VMP",
          price: 5999,
          quantity: 1,
        },
      ],
    });
  };

  return (
    <a
      href={CHECKOUT_URL}
      onClick={handleCheckout}
      className={className}
    >
      {children}
    </a>
  );
}