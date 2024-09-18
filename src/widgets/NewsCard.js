import Image from "next/image";

export default function NewsCard({ item }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={item[5]} target="_blank">
        <div className="relative w-full h-48">
          <Image
            className="object-cover"
            src={item[3]}
            alt={item[1]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item[1]}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item[2]}
          </p>
        </div>
      </a>
    </div>
  );
}
