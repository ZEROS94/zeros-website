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
                  ZEROS<br />
                  <span className="text-gray-600">자동화제어 전장 전문기업</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ZEROS는 자동화 제어 및 전장 부분 설계 및 제작을 전문으로 하는 기업입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  2024년 11월 18일 설립되어, 최신 기술을 기반으로 고객의 다양한 자동화 제어 남을 제공하고 있습니다.
                  최고의 기술과 단심으로 산업의 미래를 만들어갑니다.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[                    { label: "설립연도", value: "2024년 11월 18일" },
                    { label: "대표자", value: "이창문" },
                    { label: "사업분야", value: "자동화제어 전장" },
                    { label: "소재지", value: "경기도 오산시" }
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
                  src="/manus-storage/wMfCdBuTEnV7_f917f3c1.jpg"
                  alt="ZEROS - Hyundai Terra Tower"
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
              <div className="bg-white p-8 md:p-12 shadow-sm text-center">
                <p className="text-gray-500 text-lg">준비 중입니다.</p>
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

            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-blue-50 p-12 rounded">
                <p className="text-gray-500 text-lg">준비 중입니다.</p>
              </div>
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
                    <p className="text-gray-700 font-medium">경기도 오산시 수목원로88번길35, 현대테라타워 CMC 436호</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">전화</p>
                    <a href="tel:010-3066-2545" className="text-blue-600 font-bold text-lg no-underline hover:text-blue-700">010-3066-2545</a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">이메일</p>
                    <a href="mailto:ansdle@zeros.team" className="text-gray-700 no-underline hover:text-blue-600">ansdle@zeros.team</a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">사업자등록번호</p>
                    <p className="text-gray-700">623-33-01606</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://map.naver.com/index.nhn?c=13.00,126.80,11,0,0,0,dh&isCorrectAnswer=true&query=경기도%20오산시%20수목원로88번길35%20현대테라타워CMC%20436호"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  title="ZEROS 위치"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
