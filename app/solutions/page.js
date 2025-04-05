import React from "react";

const JadeOrdersComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 ">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Pick the <span className="text-blue-600">best plan</span> for your
            store
          </h2>
          <p className="text-gray-700 mb-6">
            Unlock more sales with products and services that help you scale and
            find new customers, improve profitability, and take your business to
            the next level.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium mb-3">
            Get started with Jade Orders
          </button>
          <p className="text-gray-600 text-sm">Already on Jade Orders?</p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/jadeorder/solutionhero.png"
            alt="Coffee shop owner behind counter"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Admin Panels Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full mx-auto mr-20 md:w-1/2">
          <img
            src="/jadeorder/solution1.png"
            alt="Admin dashboard interface"
            className="w-full mx-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Super Admin Panel</h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p>Admin Panel To Control Whole Platform.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              Admin Panel For Merchants
            </h3>
            <div className="flex items-center mb-2">
              <div className=" p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p>Admin Panel for Merchants To Control Business.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Customer Website</h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />{" "}
              </div>
              <p>Customer Website To Get Service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Jade Orders Merchant</h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p>Merchant App</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Jade Orders Customer</h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p>Customer App</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Jade Orders Rider</h3>
            <div className="flex items-center mb-2">
              <div className="p-1 rounded mr-2">
                <img
                  src="/jadeorder/bag.png"
                  alt="Lock icon"
                  className="h-16 w-16"
                />
              </div>
              <p>Rider App</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/jadeorder/solution2.png"
            alt="Mobile applications on different devices"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JadeOrdersComponent;
