/*
 * GUTECH Home Page - Tech Modernism Design
 * Sections: Hero Slider, Services, About Us, CTA Banner, Portfolio, Partners, News/Databank
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Phone, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero slides data
const heroSlides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    label: "Industrial Automation Leader",
    title: "신뢰를 기반으로 하는\n주식회사 지유테크",
    subtitle: "PLC, SERVO, ROBOT 및 주변기기를 이용한\n자동화 설계, 제작, 시운전, 유지보수 전문기업",
    cta: "자세히 보기",
    ctaHref: "/about",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    label: "Smart Factory",
    title: "스마트팩토리\n솔루션",
    subtitle: "자동차, 반도체, 디스플레이, 2차전지 산업의\n공장자동화(FA) 분야 Total Solution",
    cta: "사업영역 보기",
    ctaHref: "/services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "Logistics Automation",
    title: "물류 자동화\n시스템",
    subtitle: "Stocker, AGV/AMR, Lifer, Conveyor, OHT, OHS, OHCV를 통한\n물류 자동화 솔루션",
    cta: "자세히 보기",
    ctaHref: "/services#logistics",
  },
];

// Services data
const services = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    label: "SERVICE",
    title: "스마트팩토리",
    subtitle: "Smart Factory",
    desc: "자동차, 반도체, 디스플레이, 2차전지 산업의 스마트팩토리 솔루션 제공",
    href: "/services#smartfactory",
    icon: "🏭",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "SERVICE",
    title: "물류",
    subtitle: "Logistics",
    desc: "Stocker, AGV/AMR, Conveyor, OHT, OHCV 등 물류 자동화 시스템",
    href: "/services#logistics",
    icon: "🚛",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    label: "SERVICE",
    title: "공장자동화",
    subtitle: "Automation Factory",
    desc: "PLC Program 개발, 전장 설계 및 제작, HMI/SCADA 개발 및 제어",
    href: "/services#factory",
    icon: "⚙️",
  },
];

// Portfolio data
const portfolios = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    category: "Smart Factory",
    title: "SKI 미국 BA2 ASSEMBLE LINE 제어공사(22SET)",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    category: "Logistics",
    title: "SDC A4-2 PJT STK, OHCV 제어공사",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    category: "Smart Factory",
    title: "TAB WELDING 납품사례",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    category: "Factory Automation",
    title: "반도체 공정 자동화 제어시스템 구축",
  },
];

// Partners data
const partners = [
  { name: "SK", logo: null },
  { name: "SK Hynix", logo: null },
  { name: "동경전자", logo: null },
  { name: "한라", logo: null },
  { name: "AUO Optronics", logo: null },
  { name: "삼성SDI", logo: null },
];

// News data
const newsItems = [
  { title: "2024년 하반기 신규 프로젝트 수주 완료", date: "2024.10.15", category: "공지사항" },
  { title: "스마트팩토리 솔루션 전시회 참가 안내", date: "2024.09.20", category: "공지사항" },
  { title: "채용 공고 - 자동화 엔지니어 모집", date: "2024.08.10", category: "공지사항" },
];

const databankItems = [
  { title: "지유테크에서 공개하는 다양한 기술자료 및 매뉴얼 등을...", date: "2023.09.20" },
  { title: "자료실에는 최신글이 제일 위쪽에 보여지며...", date: "2023.09.20" },
  { title: "최근 등록 자료실 3개가 홈페이지에서 목록화되어 보여집니다.", date: "2023.09.20" },
];

// Scroll animation hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  useScrollAnimation();

  // Auto-advance hero slider
  useEffect(() => {
    sliderRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (sliderRef.current) clearInterval(sliderRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (sliderRef.current) clearInterval(sliderRef.current);
    sliderRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ===== HERO SLIDER ===== */}
        <section className="relative h-[500px] md:h-[620px] lg:h-[700px] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
              <div className="relative h-full container flex flex-col justify-center">
                <div className="max-w-xl">
                  <span className="font-['Oswald'] text-red-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                    {slide.label}
                  </span>
                  <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-sm md:text-base mb-8 whitespace-pre-line leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors no-underline text-sm"
                  >
                    {slide.cta}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slider controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSlide ? "bg-red-500 w-8" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`슬라이드 ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next arrows */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-red-600 text-white flex items-center justify-center transition-colors rounded-full"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-red-600 text-white flex items-center justify-center transition-colors rounded-full"
            aria-label="다음 슬라이드"
          >
            <ChevronRightIcon size={20} />
          </button>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">지유테크 주요 사업분야</span>
              <h2 className="section-title text-3xl md:text-4xl mt-3 text-gray-900">
                공장 자동화 솔루션
              </h2>
              <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
                PLC Program 개발 및 시운전, 전장 설계 및 제작 설치, 자동 제어반 설계 및 제작 설치, HMI/SCADA 개발 및 제어
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="fade-up group relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-['Oswald'] font-semibold px-3 py-1 tracking-widest">
                      {service.label}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-red-500 text-xs font-['Oswald'] font-medium tracking-wider mb-3">{service.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold hover:gap-2 transition-all no-underline border-b border-red-200 hover:border-red-600 pb-0.5"
                    >
                      LEARN MORE <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT US SECTION ===== */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Images */}
              <div className="relative fade-up">
                <div className="relative">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp"
                    alt="스마트팩토리"
                    className="w-full h-72 object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-36 border-4 border-red-600 hidden md:block" />
                </div>
                <div className="absolute -bottom-4 right-8 md:right-16 w-40 h-28 shadow-xl hidden md:block">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/about-company-8CeLi5jH6DpBkowZYS5zFK.webp"
                    alt="지유테크"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative text */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-gray-100 font-['Oswald'] font-black text-6xl tracking-widest select-none hidden lg:block">
                  GUTECH
                </div>
              </div>

              {/* Content */}
              <div className="fade-up">
                <span className="section-label">About Us</span>
                <h2 className="section-title text-3xl md:text-4xl mt-3 mb-2 text-gray-900">
                  GU Tech Co., LTD.
                </h2>
                <h3 className="text-2xl md:text-3xl font-black text-gray-700 mb-6">주식회사 지유테크</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  스마트팩토리 공장 자동화 솔루션 제공!!
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  자동차, 반도체, 디스플레이, 2차전지 산업의 공장자동화(FA) 분야에서 Stocker, AGV/AMR, Lifer, Conveyor, OHT, OHS, OHCV등을 통한 물류 자동화 및 공정장비의 Total Solution을 제공
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "자동화 물류시스템",
                    "무인운반차량 (AGV/AMR)",
                    "협동로봇",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 px-5 py-2.5 text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors no-underline"
                  >
                    연구분야 자세히보기
                    <ChevronRight size={16} />
                  </Link>
                  <a
                    href="tel:041-552-1970"
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors no-underline"
                  >
                    <Phone size={15} />
                    041-552-1970
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-brand-blue/85" />
          <div className="relative container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-white text-2xl md:text-3xl font-black text-center md:text-left">
                고객 맞춤형 솔루션을 제공해드립니다.
              </h2>
              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-3.5 font-bold hover:bg-gray-100 transition-colors no-underline text-sm"
              >
                문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO SECTION ===== */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <span className="section-label">GU Tech Portfolio</span>
              <h2 className="section-title text-3xl md:text-4xl mt-3 text-gray-900">
                지유테크에서 시행한 다양한 <span className="text-red-600">납품사례</span>를 소개합니다.
              </h2>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolios.slice(currentPortfolio, currentPortfolio + 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="fade-up group relative overflow-hidden cursor-pointer"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-red-400 text-xs font-['Oswald'] font-semibold tracking-widest uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-sm mt-1 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Portfolio navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(portfolios.length / 3) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPortfolio(idx * 3)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      Math.floor(currentPortfolio / 3) === idx
                        ? "bg-red-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`포트폴리오 ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTNERS SECTION ===== */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container">
            <div className="text-center mb-10 fade-up">
              <span className="section-label">The Relationship Partners</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center fade-up">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-16 bg-gray-50 hover:bg-gray-100 transition-colors px-4 rounded"
                >
                  <span className="text-gray-600 font-semibold text-sm text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEWS & DATABANK ===== */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* News */}
              <div className="fade-up">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="section-label">News & Notice</span>
                    <h3 className="text-xl font-black text-gray-900 mt-1">공지사항</h3>
                  </div>
                  <Link href="/contact#notice" className="text-xs text-gray-500 hover:text-red-600 no-underline flex items-center gap-1">
                    더보기 <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="bg-white shadow-sm">
                  {newsItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex-shrink-0 w-1 h-full bg-red-200 group-hover:bg-red-500 transition-colors self-stretch min-h-[2rem]" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate group-hover:text-red-600 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Databank */}
              <div className="fade-up" style={{ transitionDelay: "100ms" }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="section-label">Databank</span>
                    <h3 className="text-xl font-black text-gray-900 mt-1">자료실</h3>
                  </div>
                  <Link href="/databank" className="text-xs text-gray-500 hover:text-red-600 no-underline flex items-center gap-1">
                    더보기 <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="bg-white shadow-sm">
                  {databankItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex-shrink-0 w-1 h-full bg-blue-200 group-hover:bg-blue-500 transition-colors self-stretch min-h-[2rem]" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg rounded"
      aria-label="맨 위로"
    >
      ↑
    </button>
  );
}
