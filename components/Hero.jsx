export default function Hero() {
  return (
    <div
      className="bg-gray-100 py-20"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side (Empty for wider screens) */}
          <div className="lg:w-1/2"></div>

          {/* Right Side (Form Container) */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            {/* Header Text */}
            <h1 className="text-xl py-2 font-bold text-black mb-6">
              Tap into a new revenue stream with JMD, the perfect pairing for
              your business.
            </h1>

            {/* Form */}
            <form className="pb-12">
              {/* Use smaller space on mobile, larger on md+ */}
              <div className="space-y-4 md:space-y-8">
                {/* Business Name */}
                <input
                  type="text"
                  placeholder="Business Name"
                  className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-blue-800 w-full"
                />

                {/* Row 1: Select Business Type & Number of locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <select
                    defaultValue=""
                    className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  >
                    <option value="" disabled>
                      Select Business Type
                    </option>
                    <option value="Restaurant or Coffee shop">
                      Restaurant or Coffee shop
                    </option>
                    <option value="Grocery Store">Grocery Store</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Flower Shop">Flower Shop</option>
                    <option value="Pet Store">Pet Store</option>
                    <option value="Bakery or Pastry shop">
                      Bakery or Pastry shop
                    </option>
                    <option value="Courier and Logistics Services">
                      Courier and Logistics Services
                    </option>
                    <option value="Bookstore">Bookstore</option>
                    <option value="Other">Other</option>
                  </select>

                  <select
                    defaultValue=""
                    className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  >
                    <option value="" disabled>
                      Number of locations
                    </option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-24">11-24</option>
                    <option value="25-50">25-50</option>
                    <option value="50+">Over 50</option>
                  </select>
                </div>

                {/* Row 2: Address */}
                <input
                  type="text"
                  placeholder="123 Street, City, Province, Zip Code"
                  className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                             w-full focus:outline-none focus:ring-2 focus:ring-blue-800"
                />

                {/* Row 3: First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                {/* Row 4: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                  <input
                    type="tel"
                    placeholder="+1 0020"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              {/* Button (half-width & centered) */}
              <button
                type="submit"
                className="w-1/2 mx-auto mt-10 flex justify-center bg-blue-800 text-white p-3 rounded-md hover:bg-blue-700"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
