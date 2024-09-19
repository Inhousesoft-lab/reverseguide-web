export default function YoutubeCard({ item }) {
  const { title, description, youtubeUrl, uploadDate, videoId } = item;
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <iframe
          className="h-48 w-full object-cover border-none"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <a href={youtubeUrl} target="_blank" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">Upload date</span>
            <p className="text-sm text-gray-500">{uploadDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
