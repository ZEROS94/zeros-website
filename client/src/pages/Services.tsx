/*
 * ZEROS Services Page - 사업영역
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

const serviceDetails = [
  {
    id: "smartfactory",
    label: "Smart Factory",
    title: "스마트팩토리",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    desc: "최신 기술을 활용한 지능형 공장 자동화 솔루션을 제공합니다.",
    features: [
      "AI 기반 제어 시스템",
      "클라우드 통합 관리",
      "실시간 모니터링",
      "예측 유지보수",
      "로봇 자동화 시스템",
      "데이터 분석 플랫폼",
    ],
    industries: ["제조업", "반도체", "전자", "자동차"],
  },
  {
    id: "logistics",
    label: "Logistics",
    title: "물류자동화",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    desc: "차세대 물류 자동화 기술로 효율성을 극대화합니다.",
    features: [
      "자율주행 로봇 시스템",
      "스마트 창고 관리",
      "자동 분류 시스템",
      "실시간 추적 기술",
      "통합 물류 플랫폼",
      "IoT 센서 네트워크",
    ],
    industries: ["물류", "이커머스", "제조", "유통"],
  },
  {
    id: "factory",
    label: "Factory Automation",
    title: "공장자동화",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    desc: "첨단 제어 기술로 생산성을 높이고 비용을 절감합니다.",
    features: [
      "스마트 제어 시스템",
      "협동로봇 솔루션",
      "비전 AI 검사",
      "에너지 효율화",
      "24/7 원격 지원",
      "예방적 유지보수",
    ],
    industries: ["제조", "반도체", "전자", "기계"],
  },
];

export default function Services() {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Hero */}
      <section
        className="relative h-48 md:h-64 flex items-center"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative container">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <Link href="/" className="hover:text-white no-underline">홈</Link>
            <ChevronRight size={14} />
            <span className="text-white">사업영역</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">사업영역</h1>
        </div>
      </section>

      <main className="flex-1">
        {serviceDetails.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`fade-up ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>

                <div className={`fade-up ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <span className="section-label">{service.label}</span>
                  <h2 className="section-title text-3xl md:text-4xl mt-3 mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3 text-sm">주요 서비스</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-sm">적용 산업</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry) => (
                        <span
                          key={industry}
                          className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 border border-red-200"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 bg-brand-navy">
          <div className="container text-center fade-up">
            <h2 className="text-white text-2xl md:text-3xl font-black mb-4">
              맞춤형 기술 솔루션이 필요하신가요?
            </h2>
            <p className="text-gray-300 mb-8">ZEROS 전문팀이 최적의 솔루션을 제안해 드립니다.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 font-bold hover:bg-blue-700 transition-colors no-underline"
            >
              문의하기
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
