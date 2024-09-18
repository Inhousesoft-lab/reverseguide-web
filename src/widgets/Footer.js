import Image from "next/image";
import Logo from "@/public/assets/images/common/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">reverseguide</span>
                <Image
                  className="logo"
                  src={Logo}
                  alt="reverseguide"
                  width={180}
                  height={38}
                  priority
                />
              </a>
            </div>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs lg:text-left">
              상호명: 인하우스소프트 | 대표: 이태린 | 사업자등록번호:
              731-08-02170
            </p>
            <span className="text-sm text-gray-500 ">
              Copyright ©<a href="http://inhousesoft.com/">Inhousesoft Inc</a>.
              All Rights Reserved.
            </span>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">고객센터</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="mailto:support@reverseguide.com"
                  className="hover:underline"
                >
                  support@reverseguide.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
