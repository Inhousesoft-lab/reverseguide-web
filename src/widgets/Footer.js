import Image from "next/image";
import GrayLogo from "@/public/assets/images/common/logo_gray.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <a href="/">
            <Image src={GrayLogo} alt="reverseguide" />
          </a>
        </div>
        <div className="footer__content">
          <div className="footer__info">
            <div className="footer__company">
              <div className="footer__text-group">
                <span className="footer__text-item">
                  상호명: 인하우스소프트
                </span>
                <span className="footer__text-item">대표이사: 이태린</span>
                <span className="footer__text-item">
                  개인정보책임관리자: 명종범
                </span>
              </div>
            </div>
            <address className="footer__address">
              <div>주소: 경기도 광명시 소하로 190, 광명G타워 A동 1304호</div>
              <div className="footer__text-group">
                <span className="footer__text-item">
                  사업자등록번호: 731-08-02170
                </span>
                <span className="footer__text-item">
                  통신판매업신고증: 제2024-경기광명-00000호
                </span>
              </div>
            </address>
            <div>Copyright ©Inhousesoft Inc. All Rights Reserved.</div>
          </div>
          <div className="footer__links">
            <div className="footer__contact">
              <span className="footer__link">고객센터</span>
              <a href="#" className="footer__link">
                support@reverseguide.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
