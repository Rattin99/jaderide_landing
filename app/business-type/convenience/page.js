"use client";
import Image from "next/image";
import BusinessHero from "@/components/BusinessHero";
const RestaurantDelivery = () => {
  return (
    <div className=" min-h-screen py-10 ">
      <BusinessHero imgSrc={"/jadeorder/conveniencehero.jpg"} />
      <div className="bg-blue-50 py-10 mb-20">
        <h1 className="text-3xl text-gray-700 sm:text-2xl lg:text-3xl font-bold text-center mb-12">
          How does restaurant delivery work?
        </h1>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl p-5 mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Simplemenumanagement.png"
                alt="Setup Icon"
                width={64}
                height={64}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Set up your store</h2>
            <p className="text-gray-600">
              Send us the inventory you want to list, and we’ll work with you to
              list your restaurant menu on Jade Orders.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Trackliveorders.png"
                alt="Receive Icon"
                width={48}
                height={48}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Start receiving orders
            </h2>
            <p className="text-gray-600">
              Once your account is activated, Jade Orders customers can shop and
              pay for items online.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src="/jadeorder/Bagimage.png"
                alt="Partner Icon"
                width={48}
                height={48}
                className="w-24 h-24"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Partner for delivery</h2>
            <p className="text-gray-600">
              Have your team or Jade Orders do the shopping and deliver orders
              to customers via the Jade Orders network.
            </p>
          </div>
        </div>
      </div>
      {/* Image and Text Sections */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 p-5">
          <div className="w-full lg:w-1/2">
            <Image
              src="/jadeorder/convenience1.png"
              alt="Delivery person handing over a bag"
              width={600}
              height={400}
              className="w-full h-auto md:rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Quick, efficient delivery
            </h3>
            <p className="text-gray-600">
              Market your store on Jade Orders and connect with new customers in
              your neighborhood. Jade Orders’ average delivery time is 35
              minutes or less, and you’ll never have to hire or train drivers.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-5">
          <div className="w-full lg:w-1/2">
            <Image
              src="/jadeorder/convenience2.jpg"
              alt="Restaurant staff working on a laptop"
              width={600}
              height={400}
              className="w-full h-auto md:rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-gray-700 font-semibold mb-4">
              Built for your business
            </h3>
            <p className="text-gray-600">
              Jade Orders takes care of the restaurant shopping and delivery
              directly, so business owners can have peace of mind and accept
              orders and pack items, only handing them off to Jade Orders for
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDelivery;
