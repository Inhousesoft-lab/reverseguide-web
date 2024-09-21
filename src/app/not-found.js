"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/public/assets/images/common/img_404_2.png";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="not-found">
      <Image
        src={NotFoundImage}
        alt="not-found"
        width={220}
        height={111}
        priority
      />
      <h1 className="not-found__title">
        죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.
      </h1>
      <p className="not-found__description">
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </p>
      <div className="not-found__links">
        <a href="#" onClick={handleGoBack} className="not-found__link">
          이전으로
        </a>
        <Link href="/" className="not-found__link">
          메인으로
        </Link>
      </div>
    </div>
  );
}
