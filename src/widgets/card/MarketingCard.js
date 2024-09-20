import Image from "next/image";

export default function MarketingCard({ item }) {
  const { category, companyName, title, openDate, image01, image02 } = item;
  return (
    <div className="marketingCard">
      <div className="marketingImageContainer">
        <Image
          fill
          className="marketingLogoImage"
          sizes="(max-width: 274px) 100vw, 274px"
          src={image01}
          alt={`${title} image`}
        />
      </div>
    </div>
  );
}
