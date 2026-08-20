/*
 * zeros DataBank Page - 자료실
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { FileText, Download } from "lucide-react";

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

const databankItems = [
  { id: 1, title: "zeros 회사 소개서 2024", date: "2024.10.01", category: "카탈로그", size: "2.4MB" },
  { id: 2, title: "스마트팩토리 솔루션 기술자료", date: "2024.09.15", category: "기술자료", size: "1.8MB" },
  { id: 3, title: "물류자동화 시스템 매뉴얼", date: "2024.08.20", category: "매뉴얼", size: "3.2MB" },
  { id: 4, title: "PLC 프로그래밍 가이드", date: "2024.07.10", category: "기술자료", size: "1.5MB" },
  { id: 5, title: "AGV/AMR 시스템 소개서", date: "2024.06.05", category: "카탈로그", size: "2.1MB" },
  { id: 6, title: "zeros에서 공개하는 다양한 기술자료 및 매뉴얼 등을...", date: "2023.09.20", category: "기술자료", size: "1.2MB" },
  { id: 7, title: "자료실에는 최신글이 제일 위쪽에 보여지며...", date: "2023.09.20", category: "공지", size: "-" },
  { id: 8, title: "최근 등록 자료실 3개가 홈페이지에서 목록화되어 보여집니다.", date: "2023.09.20", category: "공지", size: "-" },
];

const categories = ["전체", "기술자료", "카탈로그", "매뉴얼", "공지"];

export default function DataBank() {
  useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered = activeCategory === "전체"
    ? databankItems
    : databankItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="container text-center">
          <span className="section-label">Resource Center</span>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-black mt-3">자료실</h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-relaxed">
            zeros의 기술자료와 제품 정보를 한곳에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      <main className="flex-1 py-20 bg-gray-50">
        <div className="container">
          <div className="text-center fade-up">
            <div className="mt-8 max-w-5xl mx-auto">
              <img src="/page-coming-soon.png" alt="페이지 준비 중" className="w-full h-auto shadow-sm" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
