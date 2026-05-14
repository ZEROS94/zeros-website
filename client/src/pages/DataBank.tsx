/*
 * ZEROS DataBank Page - 자료실
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, FileText, Download } from "lucide-react";

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
  { id: 1, title: "지유테크 회사 소개서 2024", date: "2024.10.01", category: "카탈로그", size: "2.4MB" },
  { id: 2, title: "스마트팩토리 솔루션 기술자료", date: "2024.09.15", category: "기술자료", size: "1.8MB" },
  { id: 3, title: "물류자동화 시스템 매뉴얼", date: "2024.08.20", category: "매뉴얼", size: "3.2MB" },
  { id: 4, title: "PLC 프로그래밍 가이드", date: "2024.07.10", category: "기술자료", size: "1.5MB" },
  { id: 5, title: "AGV/AMR 시스템 소개서", date: "2024.06.05", category: "카탈로그", size: "2.1MB" },
  { id: 6, title: "지유테크에서 공개하는 다양한 기술자료 및 매뉴얼 등을...", date: "2023.09.20", category: "기술자료", size: "1.2MB" },
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
            <span className="text-white">자료실</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">자료실</h1>
        </div>
      </section>

      <main className="flex-1 py-20 bg-gray-50">
        <div className="container">
          <div className="text-center fade-up">
            <div className="mt-8 p-12 bg-white rounded-lg border-2 border-dashed border-gray-300 max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg font-semibold">준비중입니다</p>
              <p className="text-gray-500 text-sm mt-2">ZEROS의 자료실은 곧 업데이트될 예정입니다.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
