import Image from "next/image";

export default function MCampaignCard({ item }) {
  const { category, companyName, title, openDate, image01, image02 } = item;
  return (
    <div className="campaignCard">
      <div className="campaignImageContainer">
        <Image
          fill
          className="campaignLogoImage"
          sizes="(max-width: 274px) 100vw, 274px"
          src={image01}
          alt={`${title} image`}
        />
      </div>
    </div>
  );
}
