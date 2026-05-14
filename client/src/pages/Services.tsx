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
    desc: "스마트팩토리 전장 시스템 설계 및 제작을 제공합니다.",
    features: [
      "전장 시스템 설계",
      "PLC/SERVO 제어",
      "스위치 및 릴레이 설계",
      "동력 및 전력 설계",
      "HMI/SCADA 시스템",
      "전장 부품 조달",
    ],
    industries: ["제조업", "반도체", "전자", "자동차"],
  },
  {
    id: "logistics",
    label: "Automation Control",
    title: "자동화 제어",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    desc: "자동화 시스템 전장 설계 및 제작을 제공합니다.",
    features: [
      "전장 시스템 설계",
      "PLC 프로그래밍",
      "SERVO 동작 제어",
      "전장 부품 조달",
      "릴레이 및 스위치 설계",
      "동력 및 전력 설계",
    ],
    industries: ["제조업", "기계업", "정밀기계", "식품기계"],
  },
  {
    id: "factory",
    label: "Electrical Design",
    title: "전기 설계",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    desc: "산업용 기계 전장 시스템 설계 및 제작을 제공합니다.",
    features: [
      "전장 시스템 설계",
      "동동 및 제어 시스템",
      "전력 및 릴레이 설계",
      "스위치 및 연락 설계",
      "전장 부품 조달",
      "24/7 기술 지원",
    ],
    industries: ["제조업", "기계업", "정밀기계", "식품기계"],
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
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp)`,
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
        {/* Services Grid */}
        {serviceDetails.map((service, idx) => (
          <section key={service.id} id={service.id} className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`fade-up ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`fade-up ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="section-label">{service.label}</span>
                  <h2 className="section-title text-3xl md:text-4xl mt-3 mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-black text-gray-900 text-lg mb-4">주요 기능</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h3 className="font-black text-gray-900 text-lg mb-4">적용 산업</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-full"
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

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="container text-center fade-up">
            <h2 className="text-3xl md:text-4xl font-black mb-6">전장 설계 및 제작이 필요하신가요?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              ZEROS는 자동화 전기 설계 및 제작 분야의 전문가입니다. 
              귀사의 요구사항에 맞는 최적의 솔루션을 제공해드립니다.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="bg-brand-primary text-white px-8 py-4 font-semibold hover:bg-opacity-90 transition-all">
                문의하기
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
