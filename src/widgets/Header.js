"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/common/logo.svg";

// 헤더 메뉴 아이템
const navItems = [
  { name: "HOME", href: "/home" },
  { name: "채용정보", href: "/job" },
  { name: "유튜브", href: "/youtube" },
  { name: "뉴스", href: "/news" },
  { name: "최신정보", href: "/marketing" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Global">
        <div className="header__logo">
          <Link href="/">
            <span className="sr-only">reverseguide</span>
            <Image
              className="header__logo-image"
              src={Logo}
              alt="reverseguide"
              width={180}
              height={38}
              priority
            />
          </Link>
        </div>
        <div className="header__mobile-menu">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="header__mobile-menu-button"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="header__mobile-menu-icon"
            />
          </button>
        </div>
        <div className="header__desktop-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`header__menu-item ${
                pathname === item.href ? "header__menu-item--active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="header__mobile-dialog"
      >
        <div className="header__mobile-dialog-overlay" aria-hidden="true" />
        <DialogPanel className="header__mobile-dialog-content">
          <div className="header__mobile-dialog-header">
            <Link href="/" className="header__mobile-dialog-logo">
              <span className="sr-only">reverseguide</span>
              <Image
                alt="reverseguide"
                src={Logo}
                className="header__mobile-dialog-logo-image"
                width={180}
                height={38}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="header__mobile-dialog-close"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="header__mobile-dialog-close-icon"
              />
            </button>
          </div>
          <nav className="header__mobile-dialog-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`header__mobile-dialog-nav-item ${
                  pathname === item.href
                    ? "header__mobile-dialog-nav-item--active"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
