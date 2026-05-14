/*
 * ZEROS Header Component - Tech Modernism Design
 * Brand Blue: #003DA5 | Dark Navy: #001F3F | White text on dark
 * Sticky header with dropdown navigation
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const LOGO_URL = "/manus-storage/zeros-logo_ad92b9f3.png";

const navItems = [
  {
    label: "회사소개",
    href: "/about",
    children: [
      { label: "회사개요", href: "/about" },
      { label: "CEO 인사말", href: "/about#ceo" },
      { label: "연혁", href: "/about#history" },
      { label: "오시는 길", href: "/about#map" },
    ],
  },
  {
    label: "사업영역",
    href: "/services",
    children: [
      { label: "스마트팩토리", href: "/services#smartfactory" },
      { label: "물류자동화", href: "/services#logistics" },
      { label: "공장자동화", href: "/services#factory" },
    ],
  },
  {
    label: "연구소",
    href: "/research",
    children: [
      { label: "연구분야", href: "/research" },
      { label: "기술역량", href: "/research#tech" },
    ],
  },
  {
    label: "자료실",
    href: "/databank",
    children: [
      { label: "기술자료", href: "/databank" },
      { label: "카탈로그", href: "/databank#catalog" },
    ],
  },
  {
    label: "고객센터",
    href: "/contact",
    children: [
      { label: "공지사항", href: "/contact#notice" },
      { label: "문의하기", href: "/contact#inquiry" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <a href="mailto:ansdle@zeros.team" className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
            <Mail size={12} />
            ansdle@zeros.team
          </a>
          <div className="flex items-center gap-4">
            <span className="font-semibold tracking-widest text-blue-300 font-['Oswald']">Technology Innovation Leader</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } bg-white`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity">
              <img src={LOGO_URL} alt="ZEROS" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-5 py-6 text-sm font-semibold transition-colors no-underline border-b-2 ${
                      location === item.href
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-60" />
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 w-44 bg-white shadow-xl border-t-2 border-blue-600 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors no-underline border-b border-gray-100 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>



            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 no-underline"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-xs text-gray-500 hover:text-blue-600 no-underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        )}
      </header>
    </>
  );
}
