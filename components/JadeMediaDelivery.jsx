import Image from "next/image";

const JadeMediaDelivery = () => {
  return (
    <div className="bg-gray-100 p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Get the most out of Jade Media Delivery */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
          <div className="lg:w-1/2 flex justify-center w-[400px] h-[300px] overflow-hidden">
            <Image
              src="/image.jpg"
              alt="Jade Media Delivery"
              width={400}
              height={200}
              className="rounded-lg shadow-lg object-cover object-center"
            />
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get the most out of Jade Media Delivery
            </h2>
            <p className="text-gray-700 mb-6">
              We provide customized, accessible support whenever you need it,
              including 24/7 phone and chat support, account help, and direct
              communication with assigned drivers.
            </p>
            <p className="text-gray-700 mb-6">
              Plus, visit the Learning Center to view step-by-step tutorials and
              training videos on setting up, running, and growing your store on
              Jade Media Delivery, so you can grow profits and reach more new
              customers.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Visit the Learning Center
            </a>
          </div>
        </div>

        {/* Section 2: Explore insights you can use */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore insights you can use
            </h2>
            <p className="text-gray-700 mb-6">
              Analyze sales, access financials, respond to reviews, and check
              out customer insights including zip codes for delivery. Log on to
              the Merchant Portal or use the Business Manager App on your phone.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <Image
              src="/dashboard.png"
              alt="Dashboard Insights"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadeMediaDelivery;
