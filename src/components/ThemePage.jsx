import Footer from "./Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ThemePageTable from "./ThemePageTable";

export default function ThemePage() {
  
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f2027] to-[#203a43]"
    >
      <nav className="px-5 w-screen z-30 text-white gap-8 absolute top-0 left-0 h-[11vh] flex items-center justify-between bg-transparent">
        <div className="flex items-center gap-5 max-h-[9vh]">
          <LazyLoadImage className="w-14" src="/TechnoJam.png" alt="" />
          <LazyLoadImage src="/GU Logo.png" className="w-36" />
        </div>
      </nav>
      <ThemePageTable />
      <Footer className="w-full mt-8" />
    </div>
  );
}
