import Image from "next/image";

const brandData = [
  {
    logo: "/home/karachi.jpg",
    name: "Landhi",
    visitors: 35,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/home/karachi2.jpg",
    name: "Malir",
    visitors: 22,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/home/karachi.jpg",
    name: "Korangi",
    visitors: 21,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/home/karachi2.jpg",
    name: "Safoora",
    visitors: 15,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/home/karachi.jpg",
    name: "Mausamiyat",
    visitors: 35,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const IncentivesHistory = () => {
  return (
    <div className="rounded-sm border  bg-white px-5 pt-6 pb-2  sm:px-7 xl:pb-1 font-poppins mt-10">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Areas
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Population
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Waste Generated
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Incentives
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Recycling
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1 ? "" : "border-b  "
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncentivesHistory;
