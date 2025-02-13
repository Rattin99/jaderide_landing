import {
  Truck,
  ShoppingCart,
  Wine,
  Store,
  Flower,
  PawPrint,
  ShoppingBag,
  HeartPulse,
  Gift,
  BatteryCharging,
} from "lucide-react";

const DeliverySolutions = () => {
  const solutions = [
    { icon: <Truck className="w-5 h-5 text-blue-600" />, label: "Restaurant" },
    {
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      label: "Grocery Store",
    },
    {
      icon: <Wine className="w-5 h-5 text-blue-600" />,
      label: "Alcohol Store",
    },
    {
      icon: <Store className="w-5 h-5 text-blue-600" />,
      label: "Retail Store",
    },
    {
      icon: <Flower className="w-5 h-5 text-blue-600" />,
      label: "Flower Store",
    },
    { icon: <PawPrint className="w-5 h-5 text-blue-600" />, label: "Pet shop" },
    {
      icon: <ShoppingBag className="w-5 h-5 text-blue-600" />,
      label: "Convenience",
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-blue-600" />,
      label: "Pharmacy",
    },
    {
      icon: <BatteryCharging className="w-5 h-5 text-blue-600" />,
      label: "Batteries",
    },
    { icon: <Gift className="w-5 h-5 text-blue-600" />, label: "Gifts" },
  ];

  return (
    <div className="p-6 bg-blue-600">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Custom delivery solutions for your business.
      </h2>

      {/* Mobile: 2 boxes per row */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="mr-2">{solution.icon}</div>
            <p className="text-sm font-medium text-gray-800">
              {solution.label}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: 3-4-3 rows with centered alignment */}
      <div className="hidden lg:block">
        {/* First Row: 3 Boxes */}
        <div className="flex justify-center gap-6 mb-6">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="mr-2">{solution.icon}</div>
              <p className="text-sm font-medium text-gray-800">
                {solution.label}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 4 Boxes */}
        <div className="flex justify-center gap-6 mb-6">
          {solutions.slice(3, 7).map((solution, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="mr-2">{solution.icon}</div>
              <p className="text-sm font-medium text-gray-800">
                {solution.label}
              </p>
            </div>
          ))}
        </div>

        {/* Third Row: 3 Boxes */}
        <div className="flex justify-center gap-6">
          {solutions.slice(7, 10).map((solution, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="mr-2">{solution.icon}</div>
              <p className="text-sm font-medium text-gray-800">
                {solution.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverySolutions;
