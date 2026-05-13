/*
 * ZEROS Home Page - Tech Modernism Design
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
    label: "Technology Innovation Leader",
    title: "혁신 기술으로 미래를 열다\nZEROS",
    subtitle: "첨단 기술 솔루션과 혁신적인 서비스로\n글로벌 시장을 선도하는 기업",
    cta: "자세히 보기",
    ctaHref: "/about",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    label: "Smart Solutions",
    title: "스마트팩토리\n솔루션",
    subtitle: "최신 기술을 활용한 지능형 공장\n자동화 시스템 구축",
    cta: "사업영역 보기",
    ctaHref: "/services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "Advanced Logistics",
    title: "물류 자동화\n시스템",
    subtitle: "차세대 물류 자동화 기술로\n효율성을 극대화합니다",
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
    desc: "최신 기술을 활용한 지능형 공장 자동화 솔루션",
    href: "/services#smartfactory",
    icon: "🏭",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "SERVICE",
    title: "물류",
    subtitle: "Logistics",
    desc: "차세대 물류 자동화 기술로 효율성을 극대화",
    href: "/services#logistics",
    icon: "🚛",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    label: "SERVICE",
    title: "공장자동화",
    subtitle: "Automation Factory",
    desc: "첨단 제어 기술로 생산성을 높이고 비용을 절감",
    href: "/services#factory",
    icon: "⚙️",
  },
];

// Portfolio data
const portfolios = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    category: "Smart Factory",
    title: "대규모 스마트팩토리 시스템 구축",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    category: "Logistics",
    title: "자동화 물류센터 완공",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    category: "Smart Factory",
    title: "로봇 자동화 시스템 납품",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-factory-ZYmDbKDQhKqVBpswuRtqAJ.webp",
    category: "Factory Automation",
    title: "제어 시스템 고도화 프로젝트",
  },
];

// Partners data
const partners = [
  { name: "준비 중", logo: null },
];

// News data
const news = [
  { id: 1, title: "준비 중", date: "", category: "" },
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
              <div className="absolute inset-0 bg-blue-900/60" />
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

        {/* About Us Section */}
        <section className="py-20 bg-gray-50" id="about">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <span className="section-label">About Us</span>
                <h2 className="section-title text-3xl md:text-4xl mt-3 mb-6 text-gray-900">
                  ZEROS에 대해<br />
                  <span className="text-gray-600">알아보세요</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ZEROS는 첨단 기술 솔루션과 혁신적인 서비스로 글로벌 시장을 선도하는 기업입니다.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  고객의 성공을 위해 최고의 기술과 서비스를 제공하며, 지속적인 혁신을 통해 산업의 미래를 만들어갑니다.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 no-underline"
                >
                  회사소개 더보기
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="fade-up">
                <img
                  src="/manus-storage/wMfCdBuTEnV7_f917f3c1.jpg"
                  alt="ZEROS - Hyundai Terra Tower"
                  className="w-full h-80 object-cover shadow-lg"
                />
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

            <div className="max-w-2xl mx-auto">
              <div className="fade-up bg-blue-50 p-12 text-center rounded">
                <p className="text-gray-500 text-lg">준비 중입니다.</p>
              </div>
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

            <div className="max-w-2xl mx-auto">
              <div className="fade-up bg-blue-50 p-12 text-center rounded">
                <p className="text-gray-500 text-lg">준비 중입니다.</p>
              </div>
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

            <div className="max-w-2xl mx-auto">
              <div className="fade-up bg-blue-50 p-12 text-center rounded">
                <p className="text-gray-500 text-lg">준비 중입니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
