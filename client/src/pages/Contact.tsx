/*
 * GUTECH Contact Page - 고객센터
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
  { id: 5, title: "지유테크 홈페이지 리뉴얼 안내", date: "2024.05.01", views: 342 },
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
        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
              {[
                { icon: Phone, label: "전화 문의", value: "041-552-1970", href: "tel:041-552-1970", desc: "평일 09:00 - 18:00" },
                { icon: Mail, label: "이메일 문의", value: "gutech1@gutech.co.kr", href: "mailto:gutech1@gutech.co.kr", desc: "24시간 접수 가능" },
                { icon: MapPin, label: "주소", value: "충남 천안시 서북구 직산읍 신갈2길 25", href: "#", desc: "(신갈리181-1)" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-6 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all no-underline group"
                >
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <item.icon size={22} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <p className="font-bold text-gray-800 text-sm">{item.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex border-b border-gray-200 mb-8 fade-up">
              <button
                onClick={() => setActiveTab("notice")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "notice"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                공지사항
              </button>
              <button
                onClick={() => setActiveTab("inquiry")}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "inquiry"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                문의하기
              </button>
            </div>

            {/* Notice Tab */}
            {activeTab === "notice" && (
              <div id="notice" className="fade-up">
                <div className="bg-white shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 text-white text-sm">
                        <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">번호</th>
                        <th className="text-left px-6 py-4 font-semibold">제목</th>
                        <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">날짜</th>
                        <th className="text-left px-6 py-4 font-semibold hidden lg:table-cell">조회수</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticeItems.map((item, idx) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">
                            {noticeItems.length - idx}
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-gray-700 hover:text-red-600 transition-colors">
                              {item.title}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">{item.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-400 hidden lg:table-cell">{item.views}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Inquiry Tab */}
            {activeTab === "inquiry" && (
              <div id="inquiry" className="fade-up">
                <div className="bg-white p-8 shadow-sm max-w-2xl mx-auto">
                  <h3 className="font-black text-gray-900 text-xl mb-6">문의하기</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">회사명</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors"
                          placeholder="회사명을 입력하세요"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">담당자명 *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors"
                          placeholder="이름을 입력하세요"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">연락처 *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors"
                          placeholder="010-0000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">이메일</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">문의 제목 *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors"
                        placeholder="문의 제목을 입력하세요"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">문의 내용 *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                        placeholder="문의 내용을 입력하세요"
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={form.agree}
                        onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                        className="mt-0.5"
                      />
                      <label htmlFor="agree" className="text-xs text-gray-500">
                        개인정보 수집 및 이용에 동의합니다. (문의 처리 목적으로 수집되며, 처리 완료 후 즉시 파기됩니다.)
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      문의 접수하기
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
