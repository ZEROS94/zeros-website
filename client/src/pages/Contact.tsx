/*
 * ZEROS Contact Page - 고객센터
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

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

const noticeItems = [
  { id: 1, title: "2024년 하반기 신규 프로젝트 수주 완료", date: "2024.10.15", views: 124 },
  { id: 2, title: "스마트팩토리 솔루션 전시회 참가 안내", date: "2024.09.20", views: 98 },
  { id: 3, title: "채용 공고 - 자동화 엔지니어 모집", date: "2024.08.10", views: 215 },
  { id: 4, title: "하절기 휴무 안내 (2024년 8월)", date: "2024.07.25", views: 87 },
  { id: 5, title: "ZEROS 홈페이지 리뉴얼 안내", date: "2024.05.01", views: 342 },
];

export default function Contact() {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState<"notice" | "inquiry">("notice");
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      toast.error("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setForm({ company: "", name: "", phone: "", email: "", subject: "", message: "", agree: false });
  };

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
            <span className="text-white">고객센터</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">고객센터</h1>
        </div>
      </section>

      <main className="flex-1">
        {/* Preparing Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center fade-up">
              <div className="mt-8 p-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 max-w-2xl mx-auto">
                <p className="text-gray-600 text-lg font-semibold">준비중입니다</p>
                <p className="text-gray-500 text-sm mt-2">ZEROS의 곧 업데이트될 예정입니다.</p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
