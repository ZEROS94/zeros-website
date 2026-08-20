/*
 * zeros Home Page - Tech Modernism Design
 * Sections: Hero Slider, Services, CTA Banner, Portfolio, Partners, News/Databank
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero slides data
const heroSlides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    label: "Electrical Control Expert",
    title: "전장 기술로 미래를 열다\nzeros",
    subtitle: "자동화 전기 설계 및 제작 전문가\n산업 자동화를 실현합니다",
    cta: "사업영역 보기",
    ctaHref: "/services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    label: "Electrical Design",
    title: "스마트팩토리\n전장 설계",
    subtitle: "스마트팩토리 및 산업용 기계\n전장 시스템 설계 및 제작",
    cta: "사업영역 보기",
    ctaHref: "/services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "Logistics Automation",
    title: "물류 자동화\n시스템",
    subtitle: "스마트 물류 시스템으로\n효율적인 운영을 실현",
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
    desc: "스마트팩토리 전장 시스템 설계 및 제작",
    href: "/services#smartfactory",
    icon: "🏭",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "SERVICE",
    title: "물류 자동화",
    subtitle: "Logistics Automation",
    desc: "물류 이송·분류·적재 시스템 설계 및 제작",
    href: "/services#logistics",
    icon: "⚡",
  },
  {
    image: "/panel-design-service.png",
    label: "SERVICE",
    title: "전장 설계",
    subtitle: "Electrical Design",
    desc: "산업용 기계 전장 시스템 설계 및 제작",
    href: "/services#factory",
    icon: "🔌",
  },
];

// Portfolio data
const portfolios = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    category: "Smart Factory",
    title: "스마트팩토리 전장 시스템 설계 및 제작",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    category: "Logistics Automation",
    title: "물류 자동화 시스템 설계 및 제작",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    category: "Electrical Design",
    title: "산업용 기계 전장 시스템 납품",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    category: "Control System",
    title: "제어 시스템 전장 설계 및 제작",
  },
];

// Partners data
const partners = [
  { name: "준비 중", logo: null },
];

// News data
const news = [
  { id: 1, title: "zeros 공식 웹사이트 오픈", date: "2024-11-18", category: "공지" },
  { id: 2, title: "전장 설계 및 제작 서비스 시작", date: "2024-11-18", category: "서비스" },
  { id: 3, title: "현대테라타워 CMC 436호 사무실 오픈", date: "2024-11-18", category: "소식" },
];

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

export default function Home() {
  useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Slider */}
        <section className="relative h-96 md:h-screen overflow-hidden" ref={sliderRef}>
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 container flex flex-col justify-center">
                <div className="fade-up text-white max-w-2xl">
                  <span className="font-['Oswald'] text-sm font-bold tracking-widest text-blue-300 uppercase">
                    {slide.label}
                  </span>
                  <h1 className="font-['Oswald'] font-black text-4xl md:text-6xl mt-4 mb-6 leading-tight whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed whitespace-pre-line">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition-colors no-underline"
                  >
                    {slide.cta}
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="이전 슬라이드"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
                  }`}
                  aria-label={`슬라이드 ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="다음 슬라이드"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white" id="services">
          <div className="container">
            <div className="text-center mb-16 fade-up">
              <span className="section-label">Our Services</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3 text-gray-900">주요 사업</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="group fade-up no-underline"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                  </div>
                  <span className="section-label">{service.label}</span>
                  <h3 className="font-black text-2xl text-gray-900 mt-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Factory Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up relative overflow-hidden shadow-xl">
                <img
                  src="/smart-factory-vision.png"
                  alt="AI 기반 스마트팩토리 자동화 현장"
                  className="w-full h-80 md:h-[28rem] object-cover"
                />
              </div>
              <div className="fade-up">
                <span className="section-label">Smart Factory Vision</span>
                <h2 className="section-title text-3xl md:text-4xl mt-3 mb-6 text-gray-900">
                  스마트 제조의 미래를<br />
                  <span className="text-gray-600">설계합니다</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AI와 데이터 기반의 자동화 기술로 생산 현장의 운영 효율과 유연성을 높입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  zeros는 전장 설계와 제어 시스템을 바탕으로 고객 환경에 최적화된 스마트팩토리 솔루션을 제공합니다.
                </p>
                <Link
                  href="/services#smartfactory"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 no-underline"
                >
                  스마트팩토리 자세히 보기
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center fade-up">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              고객 맞춤형 솔루션이 필요하신가요?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              전문 팀이 최적의 솔루션을 제안해 드립니다.
            </p>
            <a
              href="tel:02-1234-5678"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-colors no-underline rounded"
            >
              <Phone size={18} />
              지금 문의하기
            </a>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-white" id="portfolio">
          <div className="container">
            <div className="text-center mb-16 fade-up">
              <span className="section-label">Portfolio</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3 text-gray-900">납품사례</h2>
            </div>

            <div className="max-w-5xl mx-auto fade-up">
              <img src="/page-coming-soon.png" alt="페이지 준비 중" className="w-full h-auto shadow-sm" />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50" id="partners">
          <div className="container">
            <div className="text-center mb-16 fade-up">
              <span className="section-label">Partners</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3 text-gray-900">파트너사</h2>
            </div>

            <div className="max-w-5xl mx-auto fade-up">
              <img src="/page-coming-soon.png" alt="페이지 준비 중" className="w-full h-auto shadow-sm" />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-white" id="news">
          <div className="container">
            <div className="text-center mb-16 fade-up">
              <span className="section-label">News & Updates</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3 text-gray-900">뉴스</h2>
            </div>

            <div className="max-w-5xl mx-auto fade-up">
              <img src="/page-coming-soon.png" alt="페이지 준비 중" className="w-full h-auto shadow-sm" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
