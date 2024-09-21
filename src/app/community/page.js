import Image from "next/image";
import NoResultImage from "@/public/assets/images/common/img_no_result.png";

export default function Community() {
  return (
    <div className="sub-page">
      <h1 className="sub-page__title">커뮤니티</h1>
      <div className="community__content">
        <Image
          src={NoResultImage}
          alt="not-result"
          width={30}
          height={58}
          priority
        />
        <p className="community__description">준비중입니다.</p>
      </div>
    </div>
  );
}
