import Image from "next/image";

const LearningSection = () => {
  return (
    <div className="w-full">
      {/* Starter Guide Section */}
      <section className="text-center px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold">Starter Guide</h2>
        <p className="text-gray-600 mt-2">
          Follow these steps to launch your Jade Media Delivery store and start
          growing sales
        </p>
        <div className="mt-6 w-full flex flex-col md:flex-row items-stretch justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn1.jpg"
              alt="Guide 1"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full h-2/3 object-cover"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                How to sign up for Jade Media Delivery as a Merchant
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                Learn how to sign up, set up your store, and begin taking orders
                in no time.
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                Read more →
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn2.png"
              alt="Guide 2"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full overflow-hidden object-cover"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                How to set up all your store essentials
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                Everything you need to know about setting up your store on the
                Merchant Portal.
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                Read more →
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg max-w-sm flex-1 flex flex-col">
            <Image
              src="/jadeorder/learn3.png"
              alt="Guide 3"
              width={300}
              height={200}
              className="rounded-md rounded-b-none w-full object-cover overflow-hidden"
            />
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mt-3">
                How to add photos to your menu
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">
                Learn how to add your logo, photos, and other ways to enhance
                your menu.
              </p>
              <div className="text-blue-600 mt-3 text-sm font-medium">
                Read more →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="bg-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/jadeorder/train.png"
            alt="Training"
            width={600}
            height={450}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-4xl font-semibold">
              Train your team to use Jade Media Delivery
            </h3>
            <p className="mt-2 text-xl text-gray-200">
              Quickly equip your team with the skills they need to process
              orders, problem-solve, and keep operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Jade Media Roots Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          <Image
            src="/jadeorder/employee.jpg"
            alt="Roots"
            width={600}
            height={450}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-4xl font-semibold">Jade Media Roots</h3>
            <p className="mt-2 text-xl text-gray-600">
              Staying true to JadeMedia’s mission of empowering local economies,
              JadeMediaRoots elevates voices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningSection;
