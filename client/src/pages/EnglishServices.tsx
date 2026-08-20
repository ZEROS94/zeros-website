import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceDetails = [
  {
    id: "smartfactory",
    label: "Smart Factory",
    title: "Smart Factory Solutions",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-smartfactory-5EZ6o8rBHv5SehaJeirCNM.webp",
    desc: "We design and manufacture electrical systems that make industrial operations more connected, visible, and responsive.",
    features: ["Electrical system design", "PLC and servo control", "Switch and relay engineering", "Power distribution design", "HMI and SCADA systems", "Electrical component sourcing"],
    industries: ["Manufacturing", "Semiconductors", "Electronics", "Automotive"],
  },
  {
    id: "logistics",
    label: "Logistics Automation",
    title: "Logistics Automation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663653525291/87eFmJv545SUemcynynv2g/service-logistics-ToBSDjvMmLCL6Lqz7siH3V.webp",
    desc: "We engineer material handling, sorting, storage, and integrated control systems around the needs of each logistics operation.",
    features: ["Intralogistics system design", "Conveyor and transfer equipment control", "AGV and AMR integration", "Sorting, loading, and picking systems", "WMS and MES control integration", "Commissioning and maintenance support"],
    industries: ["Manufacturing", "Distribution Centers", "E-commerce", "Food and Retail"],
  },
  {
    id: "factory",
    label: "Electrical Design",
    title: "Electrical Design & Manufacturing",
    image: "/panel-design-service.png",
    desc: "We provide reliable electrical design and panel manufacturing for industrial machines and automation equipment.",
    features: ["Electrical system design", "Power and control system engineering", "Power and relay design", "Switch and contactor design", "Electrical component sourcing", "Technical support"],
    industries: ["Manufacturing", "Industrial Machinery", "Precision Equipment", "Food Processing Machinery"],
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

export default function EnglishServices() {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="border-b border-gray-100 bg-white pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="container text-center">
          <span className="section-label">Business Areas</span>
          <h1 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">Industrial Automation Solutions</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">Discover practical smart factory, logistics automation, and electrical design solutions engineered for industrial environments.</p>
        </div>
      </section>

      <main className="flex-1">
        {serviceDetails.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className={`fade-up ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={service.image} alt={service.title} className="h-96 w-full rounded-lg object-cover shadow-lg" />
              </div>
              <div className={`fade-up ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="section-label">{service.label}</span>
                <h2 className="section-title mt-3 mb-6 text-3xl text-gray-900 md:text-4xl">{service.title}</h2>
                <p className="mb-8 leading-relaxed text-gray-600">{service.desc}</p>
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-black text-gray-900">Key Capabilities</h3>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {service.features.map((feature) => <div key={feature} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" /><span className="text-sm text-gray-700">{feature}</span></div>)}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-black text-gray-900">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">{service.industries.map((industry) => <span key={industry} className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">{industry}</span>)}</div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-brand-navy py-20 text-white">
          <div className="container fade-up text-center">
            <h2 className="mb-6 text-3xl font-black md:text-4xl">Looking for Electrical Design and Manufacturing Expertise?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">zeros develops and delivers automation solutions designed around your technical requirements.</p>
            <Link href="/en/contact" className="inline-block bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700 no-underline">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
