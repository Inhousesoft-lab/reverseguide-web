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
    <div className="jobCard">
      <div className="metaInfo">
        <span className="deadline">{applicationDeadline}</span>
        <span className="platform">{platform}</span>
      </div>
      <div className="companyName">{companyName}</div>
      <div className="jobTitle">{title}</div>
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
