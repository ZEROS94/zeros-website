/*
 * zeros Research Page - 연구소
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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

      {/* Page Header */}
      <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="container text-center">
          <span className="section-label">Research & Development</span>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-black mt-3">연구소</h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-relaxed">
            산업 자동화의 가능성을 넓히는 기술을 연구하고, 현장에 적용 가능한 솔루션을 개발합니다.
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Research Areas */}
        <section className="py-20 bg-white" id="research">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">Research & Development</span>
              <h2 className="section-title text-3xl md:text-4xl mt-3 text-gray-900">연구분야</h2>
              <div className="mt-8 max-w-5xl mx-auto">
                <img src="/page-coming-soon.png" alt="페이지 준비 중" className="w-full h-auto shadow-sm" />
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
