import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-brand-ice text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Digital Experience</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
              Preserving Culture & Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ice to-sky-400">Digital Archives</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              RAAKH brings heritage, modern visual design, and structured digital storytelling together into one high-performance experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/archive"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-brand-ice text-slate-900 font-semibold hover:bg-sky-400 transition flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
              >
                Explore Archives
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-brand-card border border-brand-border text-slate-200 hover:text-white hover:bg-slate-800 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Core Pillars of RAAKH</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Built with precision for speed, accessibility, and high visual impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-card/60 border border-brand-border p-6 rounded-xl hover:border-brand-ice/50 transition duration-300">
              <div className="w-12 h-12 bg-brand-ice/10 border border-brand-ice/30 rounded-lg flex items-center justify-center text-brand-ice mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Curated Exploration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seamlessly browse categorized archives, heritage stories, and high-resolution visual sets.
              </p>
            </div>

            <div className="bg-brand-card/60 border border-brand-border p-6 rounded-xl hover:border-brand-ice/50 transition duration-300">
              <div className="w-12 h-12 bg-brand-ice/10 border border-brand-ice/30 rounded-lg flex items-center justify-center text-brand-ice mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Structured Metadata</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every record is indexed with tags, categories, and fast full-text filtering capabilities.
              </p>
            </div>

            <div className="bg-brand-card/60 border border-brand-border p-6 rounded-xl hover:border-brand-ice/50 transition duration-300">
              <div className="w-12 h-12 bg-brand-ice/10 border border-brand-ice/30 rounded-lg flex items-center justify-center text-brand-ice mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Powered by Next.js and global CDN delivery for sub-second page loads anywhere in the world.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
