import Image from "next/image";

export default function NewsCard({ item }) {
  const { companyName, title, viewDate, image01, image02, link } = item;
  return (
    <div className="max-w-sm bg-white">
      <a href={link} target="_blank">
        <div className="relative w-full h-48">
          <Image
            className="rounded-xl object-cover"
            src={image01}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="badgeWrapper pt-2">
          <span className="subBadge">{companyName}</span>
        </div>
        <div className="pt-2">
          <h2 className="cardTitle">{title}</h2>
          <p className="cardMetaInfo pt-2">{viewDate}</p>
        </div>
      </a>
    </div>
  );
}
