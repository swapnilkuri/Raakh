import Footer from "@/components/Footer";
import { Sparkles, Globe, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Header */}
        <section className="bg-brand-card/40 border-b border-brand-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              About <span className="text-brand-ice">RAAKH</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A digital initiative designed to preserve, organize, and highlight cultural heritage and visual storytelling through high-performance web systems.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="bg-brand-card/60 border border-brand-border rounded-xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-brand-ice" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              RAAKH bridges the gap between traditional cultural archives and modern digital experiences. By using structured metadata, fast client-side navigation, and high-contrast visual design, RAAKH provides an intuitive platform where stories, heritage art, and research can be documented and discovered cleanly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-card/60 border border-brand-border rounded-xl p-6">
              <Globe className="w-8 h-8 text-brand-ice mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Accessibility</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimized for lightning-fast loading across all networks, desktop screens, and mobile devices worldwide.
              </p>
            </div>

            <div className="bg-brand-card/60 border border-brand-border rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-brand-ice mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Preservation First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every entry is indexed with static JSON records to ensure long-term availability and fast search indexing.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
