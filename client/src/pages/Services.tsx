/*
 * GUTECH Services Page - 사업영역
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
    desc: "자동차, 반도체, 디스플레이, 2차전지 산업의 공장자동화(FA) 분야에서 스마트팩토리 솔루션을 제공합니다.",
    features: [
      "PLC Program 개발 및 시운전",
      "전장 설계 및 제작 설치",
      "자동 제어반 설계 및 제작 설치",
      "HMI/SCADA 개발 및 제어",
      "로봇 자동화 시스템 구축",
      "MES/ERP 연동 시스템",
    ],
    industries: ["자동차", "반도체", "디스플레이", "2차전지"],
  },
  {
    id: "logistics",
    label: "Logistics",
    title: "물류자동화",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    desc: "Stocker, AGV/AMR, Lifer, Conveyor, OHT, OHS, OHCV등을 통한 물류 자동화 시스템을 제공합니다.",
    features: [
      "Stocker 시스템 설계 및 구축",
      "AGV/AMR 자율주행 시스템",
      "Conveyor 물류 시스템",
      "OHT/OHS/OHCV 천장 반송 시스템",
      "물류 제어 소프트웨어 개발",
      "물류 모니터링 시스템",
    ],
    industries: ["반도체", "디스플레이", "물류센터", "제조업"],
  },
  {
    id: "factory",
    label: "Factory Automation",
    title: "공장자동화",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    desc: "PLC, SERVO, ROBOT 및 주변기기를 이용한 공장 자동화 설계, 제작, 시운전, 유지보수 서비스를 제공합니다.",
    features: [
      "자동화 설비 설계 및 제작",
      "SERVO 드라이브 시스템",
      "협동로봇 (Cobot) 시스템",
      "비전 검사 시스템",
      "자동화 설비 유지보수",
      "원격 모니터링 서비스",
    ],
    industries: ["자동차부품", "전자부품", "식품", "화학"],
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
              고객 맞춤형 솔루션이 필요하신가요?
            </h2>
            <p className="text-gray-300 mb-8">전문 엔지니어가 최적의 솔루션을 제안해 드립니다.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3.5 font-bold hover:bg-red-700 transition-colors no-underline"
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
