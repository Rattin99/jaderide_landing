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
            <form>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-2 border rounded-md"
                />
                <select
                  defaultValue={""}
                  className="w-full p-2 border rounded-md text-gray-400"
                >
                  <option value="" disabled>
                    Select Business Type
                  </option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
                <input
                  type="text"
                  placeholder="123 Street, City, Province, Zip Code"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="tel"
                  placeholder="+1"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className=" w-1/2 mx-auto flex justify-center  bg-blue-600 text-white p-2 rounded-md mt-6 hover:bg-blue-700"
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
