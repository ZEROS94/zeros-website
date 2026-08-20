/* zeros Footer Component */
import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { getLocale, localizedPath, type Locale } from "@/lib/locale";

const copy: Record<Locale, {
  description: string;
  quickLinks: string;
  contact: string;
  links: { label: string; href: string }[];
  address: React.ReactNode;
  registration: string;
  addressLine: string;
}> = {
  ko: {
    description: "zeros는 첨단 기술 솔루션과 혁신적인 서비스로 글로벌 시장을 선도하는 기업입니다. 고객의 성공을 위해 최고의 기술과 서비스를 제공합니다.",
    quickLinks: "Quick Links",
    contact: "Contact",
    links: [
      { label: "사업영역", href: "/services" },
      { label: "연구소", href: "/research" },
      { label: "자료실", href: "/databank" },
      { label: "고객센터", href: "/contact" },
    ],
    address: <>경기도 오산시 수목원로88번길35<br />현대테라타워 CMC 436호</>,
    registration: "상호 : 제로스 (zeros) | 대표자 : 이창문 | 사업자등록번호 : 623-33-01606",
    addressLine: "주소 : 경기도 오산시 수목원로88번길35, 현대테라타워 CMC 436호",
  },
  en: {
    description: "zeros delivers dependable smart manufacturing, logistics automation, and electrical design solutions for industrial operations.",
    quickLinks: "Quick Links",
    contact: "Contact",
    links: [
      { label: "Business Areas", href: "/services" },
      { label: "R&D Center", href: "/research" },
      { label: "Resource Center", href: "/databank" },
      { label: "Contact", href: "/contact" },
    ],
    address: <>436, Hyundai Teratower CMC<br />35 Sumogwon-ro 88beon-gil, Osan-si, Gyeonggi-do, Republic of Korea</>,
    registration: "Business Name: zeros | CEO: Changmoon Lee | Business Registration No.: 623-33-01606",
    addressLine: "436, Hyundai Teratower CMC, 35 Sumogwon-ro 88beon-gil, Osan-si, Gyeonggi-do, Republic of Korea",
  },
};

export default function Footer() {
  const [location] = useLocation();
  const locale = getLocale(location);
  const text = copy[locale];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="oklch(0.22 0.06 250)" />
          <path d="M0,40 C480,80 960,-20 1440,40 L1440,60 L0,60 Z" fill="oklch(0.22 0.06 250)" opacity="0.5" />
        </svg>
      </div>

      <div className="container pb-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img src="/zeros-footer-logo-white.png" alt="zeros" className="h-8 w-auto max-w-44 object-contain object-left" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">{text.description}</p>
          </div>

          <div>
            <h4 className="mb-4 font-['Oswald'] text-sm font-semibold uppercase tracking-widest text-blue-400">{text.quickLinks}</h4>
            <ul className="space-y-2">
              {text.links.map((item) => (
                <li key={item.href}>
                  <Link href={localizedPath(item.href, locale)} className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-blue-400 no-underline">
                    <span className="inline-block h-1 w-1 rounded-full bg-blue-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-['Oswald'] text-sm font-semibold uppercase tracking-widest text-blue-400">{text.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <p className="text-sm leading-relaxed text-gray-300">{text.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-blue-400" />
                <a href="tel:010-3066-2545" className="text-sm text-gray-300 transition-colors hover:text-blue-400 no-underline">010-3066-2545</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-blue-400" />
                <a href="mailto:ansdle@zeros.team" className="text-sm text-gray-300 transition-colors hover:text-blue-400 no-underline">ansdle@zeros.team</a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-1 pt-6 text-xs text-gray-400">
          <p>{text.registration}</p>
          <p>{text.addressLine}</p>
          <p className="pt-2 text-gray-500">Copyright© zeros. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
