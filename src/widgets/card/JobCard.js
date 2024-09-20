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
    <div className="cardContainer">
      <div className="badgeWrapper">
        <span className="mainBadge">{applicationDeadline}</span>
        <span className="subBadge ml-2">{platform}</span>
      </div>
      <div className="cardSubtitle">{companyName}</div>
      <div className="cardTitle">{title}</div>
      {tags && (
        <div className="tagContainer">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
