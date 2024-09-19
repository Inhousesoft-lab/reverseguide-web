import Image from "next/image";

export default function MarketingCard({ item }) {
  const { category, companyName, title, openDate, image01, image02 } = item;
  return (
    <div className="marketingCard">
      {image01 && (
        <div className="marketingLogoContainer">
          <Image
            fill
            className="marketingLogoImage"
            sizes="(max-width: 64px) 100vw, 64px"
            src={image01}
            alt={`${title} image`}
          />
        </div>
      )}
      <div className="marketingMetaInfo">
        <span className="marketingCategory">{category}</span>
        <span className="marketingCompany">{companyName}</span>
      </div>
      <h3 className="marketingTitle">{title}</h3>
      <p className="marketingOpenDate">{openDate}</p>
    </div>
  );
}
