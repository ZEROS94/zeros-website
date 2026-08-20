import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function EnglishPlaceholderPage({ eyebrow, title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="border-b border-gray-100 bg-white pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="container text-center">
          <span className="section-label">{eyebrow}</span>
          <h1 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">{description}</p>
        </div>
      </section>
      <main className="flex-1 bg-white py-20">
        <div className="container"><div className="mx-auto max-w-5xl"><img src="/page-coming-soon.png" alt="Coming soon" className="h-auto w-full shadow-sm" /></div></div>
      </main>
      <Footer />
    </div>
  );
}

export function EnglishResearch() {
  return <EnglishPlaceholderPage eyebrow="Research & Development" title="R&D Center" description="We explore automation technologies and develop practical solutions for industrial operations." />;
}

export function EnglishDataBank() {
  return <EnglishPlaceholderPage eyebrow="Resource Center" title="Resources" description="Technical resources, product information, and reference materials from zeros will be available here." />;
}

export function EnglishContact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="border-b border-gray-100 bg-white pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="container text-center">
          <span className="section-label">Contact</span>
          <h1 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">Let&apos;s Build What&apos;s Next</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">Talk with zeros about smart factory systems, logistics automation, and electrical design requirements.</p>
        </div>
      </section>
      <main className="flex-1 bg-gray-50 py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <a href="tel:010-3066-2545" className="bg-white p-7 text-center shadow-sm transition-transform hover:-translate-y-1 no-underline"><span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white"><Phone size={20} /></span><h2 className="font-bold text-gray-900">Call Us</h2><p className="mt-2 text-sm text-gray-600">010-3066-2545</p></a>
            <a href="mailto:ansdle@zeros.team" className="bg-white p-7 text-center shadow-sm transition-transform hover:-translate-y-1 no-underline"><span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white"><Mail size={20} /></span><h2 className="font-bold text-gray-900">Email Us</h2><p className="mt-2 break-all text-sm text-gray-600">ansdle@zeros.team</p></a>
            <div className="bg-white p-7 text-center shadow-sm"><span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white"><MapPin size={20} /></span><h2 className="font-bold text-gray-900">Visit Us</h2><p className="mt-2 text-sm leading-relaxed text-gray-600">436, Hyundai Teratower CMC<br />Osan-si, Gyeonggi-do, Korea</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
