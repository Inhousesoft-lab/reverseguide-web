export default function YoutubeCard({ item }) {
  const { title, description, youtubeUrl, uploadDate, videoId } = item;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="h-48 w-full object-cover border-none"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500">{uploadDate}</p>
      </div>
    </div>
  );
}
