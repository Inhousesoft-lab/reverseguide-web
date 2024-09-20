export default function YoutubeCard({ item }) {
  const { title, creator, youtubeUrl, uploadDate, videoId } = item;
  return (
    <div className="bg-white overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="rounded-xl h-48 w-full object-cover border-none"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pt-4">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardSubtitle mt-2">
          {creator}
          <span className="cardMetaInfo">&nbsp;&nbsp;{uploadDate}</span>
        </p>
      </div>
    </div>
  );
}
