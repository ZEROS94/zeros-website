import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/hero-automation-BrgEMgZZ36WJ8fRqTWvudB.webp",
    label: "Electrical Control Expertise",
    title: "Engineering the Future\nwith Electrical Technology",
    subtitle: "Design and manufacturing expertise for industrial automation.",
    cta: "Explore Our Services",
    href: "/en/services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    label: "Smart Factory",
    title: "Smarter Factories,\nBetter Operations",
    subtitle: "Electrical system design and production for smart factories and industrial machinery.",
    cta: "Explore Our Services",
    href: "/en/services#smartfactory",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    label: "Logistics Automation",
    title: "Intelligent Logistics\nAutomation",
    subtitle: "Integrated automation systems designed for efficient material flow and operations.",
    cta: "Learn More",
    href: "/en/services#logistics",
  },
];

const services = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    icon: "🏭",
    title: "Smart Factory",
    subtitle: "SMART MANUFACTURING",
    desc: "Electrical system design and fabrication for connected manufacturing environments.",
    href: "/en/services#smartfactory",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    icon: "⚡",
    title: "Logistics Automation",
    subtitle: "INTRALOGISTICS",
    desc: "Tailored conveying, sorting, picking, and integrated control systems.",
    href: "/en/services#logistics",
  },
  {
    image: "/panel-design-service.png",
    icon: "🔌",
    title: "Electrical Design",
    subtitle: "CONTROL PANELS",
    desc: "Reliable electrical design and manufacturing for industrial machinery.",
    href: "/en/services#factory",
  },
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-up").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function EnglishHome() {
  useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => setCurrentSlide((index) => (index + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(interval);
  }, []);

  const previous = () => setCurrentSlide((index) => (index - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrentSlide((index) => (index + 1) % heroSlides.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 overflow-hidden md:h-screen" ref={sliderRef}>
          {heroSlides.map((slide, index) => (
            <div key={slide.title} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
              <img src={slide.image} alt={slide.title.replace("\n", " ")} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/55" />
              <div className="container absolute inset-0 flex flex-col justify-center">
                <div className="fade-up max-w-3xl text-white">
                  <span className="font-['Oswald'] text-sm font-bold uppercase tracking-[0.18em] text-blue-300">{slide.label}</span>
                  <h1 className="mt-4 mb-6 font-['Oswald'] text-4xl font-black leading-tight whitespace-pre-line md:text-6xl">{slide.title}</h1>
                  <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">{slide.subtitle}</p>
                  <Link href={slide.href} className="inline-flex items-center gap-2 bg-blue-600 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-700 no-underline">
                    {slide.cta}<ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
            <button onClick={previous} className="rounded-full bg-white/30 p-2 text-white transition-colors hover:bg-white/50" aria-label="Previous slide"><ChevronLeft size={20} /></button>
            <div className="flex gap-2">
              {heroSlides.map((slide, index) => <button key={slide.label} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`} aria-label={`Slide ${index + 1}`} />)}
            </div>
            <button onClick={next} className="rounded-full bg-white/30 p-2 text-white transition-colors hover:bg-white/50" aria-label="Next slide"><ChevronRight size={20} /></button>
          </div>
        </section>

        <section className="bg-white py-20" id="services">
          <div className="container">
            <div className="fade-up mb-16 text-center">
              <span className="section-label">Our Services</span>
              <h2 className="section-title mt-3 text-4xl text-gray-900 md:text-5xl">Solutions for Industrial Automation</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <Link key={service.title} href={service.href} className="group fade-up no-underline" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="relative mb-6 h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
                    <div className="absolute inset-0 flex items-center justify-center"><span className="text-5xl">{service.icon}</span></div>
                  </div>
                  <span className="section-label">{service.subtitle}</span>
                  <h3 className="mt-2 text-2xl font-black text-gray-900 transition-colors group-hover:text-blue-600">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="fade-up overflow-hidden shadow-xl"><img src="/smart-factory-vision.png" alt="AI-enabled smart factory automation" className="h-80 w-full object-cover md:h-[28rem]" /></div>
            <div className="fade-up">
              <span className="section-label">Smart Factory Vision</span>
              <h2 className="section-title mt-3 mb-6 text-3xl text-gray-900 md:text-4xl">Engineering the Future of<br /><span className="text-gray-600">Smart Manufacturing</span></h2>
              <p className="mb-4 leading-relaxed text-gray-600">We increase operational efficiency and flexibility through automation technologies powered by data and intelligent control.</p>
              <p className="mb-8 leading-relaxed text-gray-600">zeros delivers practical smart-factory solutions designed around each customer environment, from electrical design to integrated control systems.</p>
              <Link href="/en/services#smartfactory" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 no-underline">Discover Smart Factory Solutions <ChevronRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-16 text-white">
          <div className="container fade-up text-center">
            <h2 className="mb-4 text-3xl font-black md:text-4xl">Need a solution tailored to your operation?</h2>
            <p className="mb-8 text-lg text-blue-100">Our engineering team is ready to help you plan the right automation solution.</p>
            <a href="tel:010-3066-2545" className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 font-bold text-blue-600 transition-colors hover:bg-gray-100 no-underline">Contact Our Team <ChevronRight size={18} /></a>
          </div>
        </section>

        {[
          { label: "Case Studies", title: "Project Portfolio" },
          { label: "Partners", title: "Our Partners" },
          { label: "News & Updates", title: "News" },
        ].map((section, index) => (
          <section key={section.title} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container">
              <div className="fade-up mb-12 text-center"><span className="section-label">{section.label}</span><h2 className="section-title mt-3 text-4xl text-gray-900 md:text-5xl">{section.title}</h2></div>
              <div className="fade-up mx-auto max-w-5xl"><img src="/page-coming-soon.png" alt="Coming soon" className="h-auto w-full shadow-sm" /></div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
