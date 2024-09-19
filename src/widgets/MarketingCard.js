import Image from "next/image";

export default function MarketingCard({ item }) {
  const { category, companyName, title, openDate, image01, image02 } = item;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col m-2">
      <div className="flex-grow">
        {image01 && (
          <div className="w-16 h-16 relative flex-shrink-0">
            <Image
              src={image01} // Assuming item[5] contains the logo URL
              alt={`${title} image`}
              fill
              sizes="(max-width: 64px) 100vw, 64px"
              className="rounded-md object-contain"
            />
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">{category}</span>
          <span className="text-gray-500 text-sm">{companyName}</span>
        </div>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-md  mt-1">{openDate}</p>
      </div>
    </div>
  );
}
