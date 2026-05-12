/*
 * GUTECH Footer Component - Tech Modernism Design
 * Dark Navy background with white text
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

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
            <div className="flex items-center gap-2 mb-4">
              <span className="font-['Oswald'] font-bold text-2xl tracking-tight">
                <span className="text-red-400">GU</span>
                <span className="text-white">T</span>
              </span>
              <div className="ml-1">
                <div className="text-xs text-gray-400 leading-tight">(주)</div>
                <div className="text-sm font-bold text-white leading-tight">지유테크</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              주식회사 지유테크는 자동차, 반도체, 디스플레이, 2차전지 산업의 공장자동화(FA) 분야에서
              Stocker, AGV/AMR, Lifer, Conveyor, OHT, OHS, OHCV등을 통한 물류 자동화 및 공정장비의
              Total Solution을 제공하고 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Oswald'] text-sm font-semibold tracking-widest uppercase text-red-400 mb-4">Quick Links</h4>
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
                    className="text-sm text-gray-300 hover:text-red-400 transition-colors no-underline flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full inline-block"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Oswald'] text-sm font-semibold tracking-widest uppercase text-red-400 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  충남 천안시 서북구 직산읍 신갈2길 25<br />
                  (신갈리181-1)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-red-400 flex-shrink-0" />
                <a href="tel:041-552-1970" className="text-sm text-gray-300 hover:text-red-400 transition-colors no-underline">
                  041-552-1970
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-red-400 flex-shrink-0" />
                <a href="mailto:gutech1@gutech.co.kr" className="text-sm text-gray-300 hover:text-red-400 transition-colors no-underline">
                  gutech1@gutech.co.kr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company registration */}
        <div className="pt-6 text-xs text-gray-400 space-y-1">
          <p>상호 : 주식회사 지유테크 | 대표자 : 김성민 | 사업자등록번호 : 312-86-64110</p>
          <p>주소 : 충남 천안시 서북구 직산읍 신갈2길 25 (신갈리181-1)</p>
          <p className="pt-2 text-gray-500">Copyright© GUTECH Co.,LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
