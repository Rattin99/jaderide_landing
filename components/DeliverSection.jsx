"use client";

import React from "react";

export default function DeliverSections() {
  return (
    <section className="w-full bg-blue-50 py-24">
      <div className="w-full mx-auto px-4">
        {/* Top Heading & Paragraph */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl w-full font-bold tracking-tight md:text-4xl">
            Delivering More
          </h2>
          <p className="mt-4 text-gray-600 w-full  mx-auto">
            When you think of Jade Media Delivery, you think of delivery — but
            the Jade Media Delivery Merchant Suite delivers many ways to help
            you grow.
          </p>
        </div>

        {/* Two-column Layout (Text Left, Image Right) */}
        <div className="flex flex-col items-center w-full gap-8 md:flex-row">
          {/* Left Column: Text */}
          <div className="md:w-1/2  h-full">
            <div className="max-w-xl mx-auto">
              <h3 className="text-3xl font-semibold mb-4">
                Grow with Jade Media Delivery
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Expand your reach by listing your restaurant, shop, or store on
                the Jade Media Delivery app, also known as Marketplace. Plus,
                increase your sales by tapping into JMDPass subscribers, who
                spend and order more on average. Included in every partnership
                is Storefront — customizable and commission-free ordering that
                lives on your website. Or use Drive to offer delivery from your
                own site or by tapping into Jade Media Delivery's network of
                Dashers. Finally, streamline operations with Tableside Order
                &amp; Pay, our in-store QR code ordering and payment solution.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/increase.png"
              alt="Increase"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
