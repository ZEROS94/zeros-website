/*
 * zeros Contact Page - 고객센터
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
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
  { id: 5, title: "zeros 홈페이지 리뉴얼 안내", date: "2024.05.01", views: 342 },
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

      {/* Page Header */}
      <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-gray-100">
        <div className="container text-center">
          <span className="section-label">Customer Center</span>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-black mt-3">고객센터</h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-relaxed">
            프로젝트 상담과 기술 문의를 위한 고객 지원 정보를 안내합니다.
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Preparing Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center fade-up">
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
