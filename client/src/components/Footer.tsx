/*
 * ZEROS Footer Component - Tech Modernism Design
 * Dark Navy background with white text
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "/manus-storage/zeros-logo_ad92b9f3.png";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Wave divider */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="oklch(0.22 0.06 250)" />
          <path d="M0,40 C480,80 960,-20 1440,40 L1440,60 L0,60 Z" fill="oklch(0.22 0.06 250)" opacity="0.5" />
        </svg>
      </div>

      <div className="container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 border-b border-white/10">
          {/* Company info */}
          <div>
            <img src={LOGO_URL} alt="ZEROS" className="h-12 mb-4 w-auto" />
            <p className="text-sm text-gray-300 leading-relaxed">
              ZEROS는 첨단 기술 솔루션과 혁신적인 서비스로 글로벌 시장을 선도하는 기업입니다.
              고객의 성공을 위해 최고의 기술과 서비스를 제공하고 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Oswald'] text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "회사소개", href: "/about" },
                { label: "사업영역", href: "/services" },
                { label: "연구소", href: "/research" },
                { label: "자료실", href: "/databank" },
                { label: "고객센터", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors no-underline flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full inline-block"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Oswald'] text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  경기도 오산시 수목원로88번길35<br />
                  현대테라타워 CMC 436호
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:010-3066-2545" className="text-sm text-gray-300 hover:text-blue-400 transition-colors no-underline">
                  010-3066-2545
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:ansdle@zeros.team" className="text-sm text-gray-300 hover:text-blue-400 transition-colors no-underline">
                  ansdle@zeros.team
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company registration */}
        <div className="pt-6 text-xs text-gray-400 space-y-1">
          <p>상호 : ZEROS | 대표자 : 이창문 | 사업자등록번호 : 623-33-01606</p>
          <p>주소 : 경기도 오산시 수목원로88번길35, 현대테라타워 CMC 436호</p>
          <p className="pt-2 text-gray-500">Copyright© ZEROS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
