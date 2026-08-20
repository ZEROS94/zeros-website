import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Research from "./pages/Research";
import DataBank from "./pages/DataBank";
import Contact from "./pages/Contact";

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: "zeros(제로스) | 스마트팩토리·물류 자동화·전장 설계",
    description: "zeros(제로스)는 스마트팩토리, 물류 자동화, 전장 설계 전문 기업입니다. 산업 현장에 최적화된 설계·제작·시운전·유지보수 솔루션을 제공합니다.",
  },
  "/services": {
    title: "사업영역 | zeros(제로스)",
    description: "zeros(제로스)의 스마트팩토리, 물류 자동화, 전장 설계 솔루션을 확인하세요.",
  },
  "/research": {
    title: "연구소 | zeros(제로스)",
    description: "zeros(제로스)는 산업 자동화 현장에 적용 가능한 스마트 제조 기술과 솔루션을 연구합니다.",
  },
  "/databank": {
    title: "자료실 | zeros(제로스)",
    description: "zeros(제로스)의 기술자료와 제품 정보를 확인하실 수 있습니다.",
  },
  "/contact": {
    title: "고객센터 | zeros(제로스)",
    description: "zeros(제로스)의 스마트팩토리·물류 자동화·전장 설계 프로젝트 상담과 기술 문의를 안내합니다.",
  },
};

function SeoMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const metadata = PAGE_METADATA[location] ?? PAGE_METADATA["/"];
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = metadata.description;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `https://www.zeros.team${location === "/" ? "/" : location}`;
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/research"} component={Research} />
      <Route path={"/databank"} component={DataBank} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <SeoMetadata />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
