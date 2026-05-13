/*
 * ZEROS About Page - 회사소개
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const historyData = [
  { year: "2024", items: ["글로벌 시장 진출 완료", "차세대 기술 연구소 개소"] },
  { year: "2023", items: ["신규 기술 발표", "국내 시장 점유율 확대"] },
  { year: "2022", items: ["기술 혁신 센터 설립", "국제 인증 획득"] },
  { year: "2021", items: ["AI 기반 솔루션 개발 착수", "협력사 네트워크 확대"] },
  { year: "2020", items: ["ZEROS 설립", "기술 개발 시작"] },
];

export default function About() {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Hero */}
      <section
        className="relative h-48 md:h-64 flex items-center"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/about-company-8CeLi5jH6DpBkowZYS5zFK.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative container">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white no-underline">홈</Link>
            <ChevronRight size={14} />
            <span className="text-white">회사소개</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">회사소개</h1>
        </div>
      </section>

      <main className="flex-1">
        {/* Company Overview */}
        <section className="py-20 bg-white" id="overview">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <span className="section-label">About Us</span>
                <h2 className="section-title text-3xl md:text-4xl mt-3 mb-6 text-gray-900">
                  ZEROS Co., Ltd.<br />
                  <span className="text-gray-600">혁신 기술의 선도자</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ZEROS는 첨단 기술 솔루션과 혁신적인 서비스로 글로벌 시장을 선도하는 기업입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  고객의 성공을 위해 최고의 기술과 서비스를 제공하며, 지속적인 혁신을 통해 산업의 미래를 만들어갑니다.
                  우리는 스마트팩토리, 물류자동화, 공장자동화 등 다양한 분야에서 Total Solution을 제공하고 있습니다.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "설립연도", value: "2020년" },
                    { label: "대표자", value: "이준호" },
                    { label: "사업분야", value: "기술혁신" },
                    { label: "소재지", value: "서울시 강남구" },
                  ].map((item) => (
                    <div key={item.label} className="bg-blue-50 p-4 border-l-4 border-blue-600">
                      <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                      <p className="font-bold text-gray-800">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-up">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/about-company-8CeLi5jH6DpBkowZYS5zFK.webp"
                  alt="ZEROS"
                  className="w-full h-80 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="py-20 bg-gray-50" id="ceo">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center fade-up">
              <span className="section-label">CEO Message</span>
              <h2 className="section-title text-3xl mt-3 mb-8 text-gray-900">CEO 인사말</h2>
              <div className="bg-white p-8 md:p-12 shadow-sm text-left">
                <p className="text-gray-600 leading-relaxed mb-4">
                  안녕하십니까, ZEROS 대표이사 이준호입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ZEROS는 첨단 기술 솔루션과 혁신적인 서비스로 글로벌 시장을 선도하는 기업으로서,
                  고객의 신뢰를 최우선으로 생각하며 최고의 기술력과 서비스를 제공하고 있습니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  스마트팩토리, 물류자동화, 공장자동화 분야에서 축적된 노하우를 바탕으로,
                  고객 맞춤형 Total Solution을 제공하여 고객의 경쟁력 강화와 비용 절감에 기여하겠습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  앞으로도 ZEROS는 끊임없는 기술 혁신과 고객 만족을 위해 최선을 다하겠습니다. 감사합니다.
                </p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-bold text-gray-800">ZEROS Co., Ltd.</p>
                  <p className="text-blue-600 font-semibold">대표이사 이준호</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-white" id="history">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">Company History</span>
              <h2 className="section-title text-3xl mt-3 text-gray-900">연혁</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {historyData.map((item, idx) => (
                <div key={idx} className="fade-up flex gap-8 mb-8" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-['Oswald'] font-bold text-2xl text-blue-600">{item.year}</span>
                  </div>
                  <div className="flex-1 border-l-2 border-gray-200 pl-8 pb-8 relative">
                    <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 rounded-full" />
                    {item.items.map((event, eIdx) => (
                      <p key={eIdx} className="text-gray-600 text-sm mb-2 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▪</span>
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 bg-gray-50" id="map">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">Location</span>
              <h2 className="section-title text-3xl mt-3 text-gray-900">오시는 길</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start fade-up">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">연락처 정보</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">주소</p>
                    <p className="text-gray-700 font-medium">서울시 강남구 테헤란로 123, ZEROS Building 10F</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">전화</p>
                    <a href="tel:02-1234-5678" className="text-blue-600 font-bold text-lg no-underline hover:text-blue-700">02-1234-5678</a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">이메일</p>
                    <a href="mailto:contact@zeros.co.kr" className="text-gray-700 no-underline hover:text-blue-600">contact@zeros.co.kr</a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">사업자등록번호</p>
                    <p className="text-gray-700">123-45-67890</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-500 text-sm">지도 영역 (서울시 강남구 테헤란로 123)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
