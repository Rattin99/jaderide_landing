import Image from "next/image";
import biker from "../public/biker.png";
import cheftablet from "../public/cheftablet.png";
const LearningCenter = () => {
  return (
    <section className="w-full h-full z-10 py-28  ">
      {/* Intro Section */}
      <div className="max-w-7xl p-5 h-full mx-auto text-center md:text-left md:flex md:items-center md:gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">
            Welcome to the{" "}
            <span className="text-blue-600">Learning Center</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Access step-by-step guides to set up your store, manage your store
            operations, and make the most of your Jade Media Delivery
            partnership.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <Image
            src="/jadeorder/biker.png"
            alt="Delivery Person on Bike"
            width={500}
            height={200}
            className="rounded-lg object-cover h-[500px] overflow-hidden"
          />
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="w-full  mt-8 overflow-x-auto no-scrollbar">
        <div className="bg-blue-50 mx-auto pr-96 flex flex-nowrap justify-start w-max  rounded-lg no-scrollbar ">
          <button className="px-4  bg-blue-800 text-white rounded-l-sm rounded-r-full ">
            Learning Center
          </button>
          <button className="px-4 py-2 text-gray-700">Get Started</button>
          <button className="px-4 py-2 text-gray-700">Menu Setup</button>
          <button className="px-4 py-2 text-gray-700">Manage Orders</button>
          <button className="px-4 py-2 text-gray-700">Store Management</button>
          <button className="px-4 py-2 text-gray-700">Ways to Grow</button>
        </div>
      </div>{" "}
      {/* Tablet Setup Section */}
      <div className="w-full bg-blue-50 p-5 mt-20">
        {" "}
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl md:text-3xl font-bold">
              Set up your Jade Media Tablet
            </h3>
            <p className="text-gray-600 mt-3">
              Get ready to access your menu, go live, and start accepting orders
              on your tablet!
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src="/jadeorder/cheftablet.png"
              alt="Chef using tablet"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCenter;
