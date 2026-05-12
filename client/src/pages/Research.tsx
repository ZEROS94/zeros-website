/*
 * GUTECH Research Page - 연구소
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

const researchAreas = [
  {
    icon: "🤖",
    title: "협동로봇 시스템",
    desc: "인간과 로봇이 협업하는 안전한 자동화 시스템 연구 및 개발",
    tags: ["Cobot", "Safety", "HRC"],
  },
  {
    icon: "🚗",
    title: "AGV/AMR 기술",
    desc: "자율주행 무인운반차량 및 자율이동로봇 기술 연구",
    tags: ["AGV", "AMR", "Navigation"],
  },
  {
    icon: "📊",
    title: "SCADA/MES 시스템",
    desc: "생산 데이터 수집 및 분석을 위한 통합 관리 시스템 개발",
    tags: ["SCADA", "MES", "Data Analytics"],
  },
  {
    icon: "🔧",
    title: "PLC 제어 기술",
    desc: "고성능 PLC 프로그래밍 및 제어 시스템 최적화 연구",
    tags: ["PLC", "SERVO", "Motion Control"],
  },
  {
    icon: "👁️",
    title: "머신비전 검사",
    desc: "AI 기반 비전 검사 시스템으로 품질 관리 자동화",
    tags: ["Vision", "AI", "Quality Control"],
  },
  {
    icon: "🏭",
    title: "스마트팩토리 솔루션",
    desc: "4차 산업혁명 기반의 지능형 공장 자동화 솔루션 개발",
    tags: ["IoT", "AI", "Smart Factory"],
  },
];

export default function Research() {
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
            <span className="text-white">연구소</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">연구소</h1>
        </div>
      </section>

      <main className="flex-1">
        {/* Research Areas */}
        <section className="py-20 bg-white" id="research">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">Research & Development</span>
              <h2 className="section-title text-3xl md:text-4xl mt-3 text-gray-900">연구분야</h2>
              <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
                지유테크 연구소는 산업 자동화 기술의 혁신을 위해 지속적인 연구개발을 수행하고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="fade-up bg-white border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all group"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Capabilities */}
        <section className="py-20 bg-gray-50" id="tech">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">Technical Capabilities</span>
              <h2 className="section-title text-3xl mt-3 text-gray-900">기술역량</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-black text-gray-900 text-lg mb-6 border-b-2 border-red-600 pb-3">
                  보유 기술
                </h3>
                {[
                  { name: "PLC/SERVO 제어", level: 95 },
                  { name: "로봇 자동화", level: 90 },
                  { name: "물류 시스템", level: 88 },
                  { name: "HMI/SCADA", level: 85 },
                  { name: "머신비전", level: 80 },
                ].map((tech) => (
                  <div key={tech.name} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{tech.name}</span>
                      <span className="text-red-600 font-semibold">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-black text-gray-900 text-lg mb-6 border-b-2 border-red-600 pb-3">
                  주요 파트너 장비
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Siemens PLC",
                    "Mitsubishi PLC",
                    "Fanuc Robot",
                    "KUKA Robot",
                    "Yaskawa SERVO",
                    "Panasonic SERVO",
                    "Cognex Vision",
                    "Keyence Sensor",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
