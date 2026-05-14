/*
 * ZEROS Research Page - 연구소
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
              <div className="mt-8 p-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-600 text-lg font-semibold">준비중입니다</p>
                <p className="text-gray-500 text-sm mt-2">ZEROS의 연구분야 정보는 곧 업데이트될 예정입니다.</p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
