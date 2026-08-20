/*
 * zeros Header Component
 * Three-zone desktop header: brand left, navigation centered, contact right.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { getLocale, localizedPath, switchLocalePath, withoutLocale, type Locale } from "@/lib/locale";

const LOGO_URL = "/zeros-company-logo.png";

type LocalText = Record<Locale, string>;

type NavigationItem = {
  label: LocalText;
  href: string;
  children: { label: LocalText; href: string }[];
};

const navItems: NavigationItem[] = [
  {
    label: { ko: "사업영역", en: "Business Areas" },
    href: "/services",
    children: [
      { label: { ko: "스마트팩토리", en: "Smart Factory" }, href: "/services#smartfactory" },
      { label: { ko: "물류자동화", en: "Logistics Automation" }, href: "/services#logistics" },
      { label: { ko: "전장설계", en: "Electrical Design" }, href: "/services#factory" },
    ],
  },
  {
    label: { ko: "연구소", en: "R&D Center" },
    href: "/research",
    children: [
      { label: { ko: "연구분야", en: "Research Areas" }, href: "/research" },
      { label: { ko: "기술역량", en: "Technical Capabilities" }, href: "/research#tech" },
    ],
  },
  {
    label: { ko: "자료실", en: "Resource Center" },
    href: "/databank",
    children: [
      { label: { ko: "기술자료", en: "Technical Resources" }, href: "/databank" },
      { label: { ko: "카탈로그", en: "Catalog" }, href: "/databank#catalog" },
    ],
  },
  {
    label: { ko: "고객센터", en: "Contact" },
    href: "/contact",
    children: [
      { label: { ko: "공지사항", en: "Notices" }, href: "/contact#notice" },
      { label: { ko: "문의하기", en: "Contact Us" }, href: "/contact#inquiry" },
    ],
  },
];

const copy: Record<Locale, {
  email: string;
  slogan: string;
  customerService: string;
  menuOpen: string;
  language: string;
}> = {
  ko: {
    email: "이메일",
    slogan: "Smart Industrial Automation",
    customerService: "고객센터",
    menuOpen: "메뉴 열기",
    language: "언어 선택",
  },
  en: {
    email: "Email",
    slogan: "Smart Industrial Automation",
    customerService: "Customer Service",
    menuOpen: "Open menu",
    language: "Language selector",
  },
};

function LanguageSwitch({ locale, location, compact = false }: { locale: Locale; location: string; compact?: boolean }) {
  const koHref = switchLocalePath(location, "ko");
  const enHref = switchLocalePath(location, "en");

  return (
    <span aria-label={copy[locale].language} className={`flex items-center ${compact ? "gap-1" : "gap-1.5"}`}>
      <Link
        href={koHref}
        className={`no-underline transition-colors ${locale === "ko" ? "text-white font-bold" : "text-white/60 hover:text-white"}`}
        aria-current={locale === "ko" ? "page" : undefined}
      >
        KR
      </Link>
      <span className="text-white/30">/</span>
      <Link
        href={enHref}
        className={`no-underline transition-colors ${locale === "en" ? "text-white font-bold" : "text-white/60 hover:text-white"}`}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </span>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const locale = getLocale(location);
  const text = copy[locale];
  const currentPath = withoutLocale(location).split("#")[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <div className="hidden md:block bg-brand-navy text-white h-8">
        <div className="h-full w-full px-6 lg:px-8 xl:px-10 flex items-center justify-between text-[11px]">
          <a
            href="mailto:ansdle@zeros.team"
            className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors no-underline"
          >
            <Mail size={11} />
            ansdle@zeros.team
          </a>
          <div className="flex h-full items-center gap-7">
            <span className="font-['Oswald'] tracking-[0.14em] text-blue-200 uppercase">{text.slogan}</span>
            <LanguageSwitch locale={locale} location={location} />
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative flex h-[4.7rem] md:h-[5.75rem] items-center justify-between">
            <Link href={localizedPath("/", locale)} className="relative z-10 flex shrink-0 items-center no-underline hover:opacity-80 transition-opacity">
              <img
                src={LOGO_URL}
                alt="zeros"
                className="h-9 md:h-11 w-auto max-w-48 md:max-w-56 object-contain object-left"
              />
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:flex items-stretch self-stretch" aria-label={locale === "ko" ? "주요 메뉴" : "Primary navigation"}>
              {navItems.map((item) => {
                const localizedHref = localizedPath(item.href, locale);
                const isActive = currentPath === item.href;
                return (
                  <div
                    key={item.href}
                    className="relative flex items-stretch group"
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={localizedHref}
                      className={`flex items-center gap-1.5 px-5 xl:px-6 text-sm font-semibold whitespace-nowrap no-underline border-b-2 transition-colors ${
                        isActive
                          ? "text-blue-700 border-blue-600"
                          : "text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-600"
                      }`}
                    >
                      {item.label[locale]}
                      <ChevronDown size={14} className="opacity-60" />
                    </Link>
                    <div
                      className={`absolute top-full left-1/2 z-30 w-52 -translate-x-1/2 border-t-2 border-blue-600 bg-white shadow-xl transition-all duration-200 ${
                        activeDropdown === item.href ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={localizedPath(child.href, locale)}
                          className="block border-b border-gray-100 px-4 py-3 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 no-underline last:border-0"
                        >
                          {child.label[locale]}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="relative z-10 hidden lg:flex items-center justify-end gap-3 min-w-56 xl:min-w-64">
              <a
                href="tel:010-3066-2545"
                className="flex items-center gap-3 text-gray-700 no-underline group"
                aria-label={`${text.customerService} 010-3066-2545`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-200 group-hover:scale-105">
                  <Phone size={17} />
                </span>
                <span className="leading-tight text-left">
                  <span className="block text-[11px] text-gray-500">{text.customerService}</span>
                  <span className="block text-sm font-bold tracking-tight">010-3066-2545</span>
                </span>
              </a>
            </div>

            <div className="relative z-10 flex items-center gap-3 lg:hidden">
              <span className="rounded-md bg-brand-navy px-2 py-1 text-[11px] font-semibold text-white">
                <LanguageSwitch locale={locale} location={location} compact />
              </span>
              <button
                className="p-2 text-gray-700 hover:text-blue-700"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={text.menuOpen}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="px-5 py-3" aria-label={locale === "ko" ? "모바일 메뉴" : "Mobile navigation"}>
              {navItems.map((item) => (
                <div key={item.href} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={localizedPath(item.href, locale)}
                    className="block py-3 text-sm font-bold text-gray-800 hover:text-blue-700 no-underline"
                  >
                    {item.label[locale]}
                  </Link>
                  <div className="grid grid-cols-2 gap-x-4 pb-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localizedPath(child.href, locale)}
                        className="py-1.5 text-xs text-gray-500 hover:text-blue-700 no-underline"
                      >
                        {child.label[locale]}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <a href="tel:010-3066-2545" className="mx-5 mb-5 flex items-center gap-3 bg-gray-50 px-4 py-3 text-gray-700 no-underline">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white"><Phone size={16} /></span>
              <span><span className="block text-[11px] text-gray-500">{text.customerService}</span><span className="text-sm font-bold">010-3066-2545</span></span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
