import Image from "next/image";

export default function JobCard({ item }) {
  const {
    companyName,
    title,
    companyLogo,
    platform,
    applicationDeadline,
    tags,
  } = item;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col m-2">
      <div className="w-16 h-16 relative flex-shrink-0">
        {companyLogo && (
          <Image
            src={companyLogo} // Assuming item[5] contains the logo URL
            alt={`${companyName} logo`}
            fill
            sizes="(max-width: 64px) 100vw, 64px"
            className="rounded-md object-contain"
          />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">
            {applicationDeadline}
          </span>
          <span className="text-gray-500 text-sm">{platform}</span>
        </div>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
      </div>
      {tags && (
        <div className="px-4 pb-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
