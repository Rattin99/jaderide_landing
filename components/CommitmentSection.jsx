"use client";

import React from "react";
import Image from "next/image";

export default function CommitmentSection() {
  return (
    <section className="bg-blue-800 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Section heading */}
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
          We’re committed to strengthening neighborhoods
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-100">
          Since our founding in 2013, Jade Media Delivery Marketplace has
          generated over $100 billion in sales for merchants.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg bg-white p-6 text-black">
            <div className="relative mx-auto mb-4 h-16 w-16">
              <Image
                src="/grocery.png"
                alt="Grocery"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Grocery</h3>
            <p className="mb-4 text-sm">
              Whether it's expanding your store's reach or providing a seamless
              grocery delivery experience, Jade Media Delivery is here to help.
            </p>
            <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Join for Grocery
            </button>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-white p-6 text-black">
            <div className="relative mx-auto mb-4 h-16 w-16">
              <Image
                src="/convenience.png"
                alt="Convenience"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Convenience</h3>
            <p className="mb-4 text-sm">
              Offer local retail delivery like beauty supplies, office supplies,
              home goods, electronics, baby goods, convenience stores. Use Jade
              Media Delivery to boost sales.
            </p>
            <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Join for Convenience
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg bg-white p-6 text-black">
            <div className="relative mx-auto mb-4 h-16 w-16">
              <Image
                src="/shopping-tems.png"
                alt="Retail Shops"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Retail Shops</h3>
            <p className="mb-4 text-sm">
              From clothing boutiques to specialty stores, reach more customers
              and increase your revenue with Jade Media Delivery's fast and
              reliable service.
            </p>
            <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Join for Retail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
