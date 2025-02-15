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
            <h1 className="text-3xl font-bold text-black mb-6">
              Tap into a new revenue stream with JMD, the
              <br />
              perfect pairing for your business.
            </h1>

            {/* Form */}
            <form className="pb-12">
              <div className="space-y-8">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                />

                {/* Row 1: Business Name & Select Business Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    defaultValue=""
                    className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="" disabled>
                      Select Business Type
                    </option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                  </select>

                  <select
                    defaultValue=""
                    className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="" disabled>
                      Number of locations
                    </option>
                    <option value="type1">1-5</option>
                    <option value="type2">6-10</option>
                    <option value="type3">11-24</option>
                    <option value="type3">25-50</option>
                    <option value="type3">Over 50</option>
                  </select>
                </div>

                {/* Row 2: Address */}
                <input
                  type="text"
                  placeholder="123 Street, City, Province, Zip Code"
                  className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                             w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                {/* Row 3: First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Row 4: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="tel"
                    placeholder="+1 0020"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700
                               focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Button (half-width & centered) */}
              <button
                type="submit"
                className="w-1/2 mx-auto mt-10 flex justify-center bg-blue-600 text-white p-3 rounded-md  hover:bg-blue-700"
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
