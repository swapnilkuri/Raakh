"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Search, Tag, Calendar, ExternalLink } from "lucide-react";

interface ArchiveItem {
  id: string;
  title: string;
  category: "Heritage" | "Visual Arts" | "Editorial" | "History";
  date: string;
  summary: string;
  tags: string[];
}

const mockArchives: ArchiveItem[] = [
  {
    id: "1",
    title: "Devipaksha & Visual Traditions of Autumn",
    category: "Heritage",
    date: "Autumn 2025",
    summary: "An exploration of autumnal iconographic art, regional craftsman heritage, and festival aesthetic shifts.",
    tags: ["Culture", "Tradition", "Art"]
  },
  {
    id: "2",
    title: "Monochrome & High-Contrast Digital Formats",
    category: "Visual Arts",
    date: "Early 2026",
    summary: "Analyzing high-contrast design paradigms, dark mode web aesthetics, and typography-first layouts.",
    tags: ["Design", "UI/UX", "Typography"]
  },
  {
    id: "3",
    title: "Archival Preservation in Modern Web Systems",
    category: "Editorial",
    date: "Mid 2026",
    summary: "How static site generators and metadata schemas ensure digital cultural artifacts remain accessible.",
    tags: ["Tech", "Archiving", "Next.js"]
  },
  {
    id: "4",
    title: "Chronicles of Regional Craftsmanship",
    category: "History",
    date: "Late 2025",
    summary: "Documenting handloom, clay modeling, and metal work traditions passing down through generations.",
    tags: ["Craft", "Heritage", "History"]
  }
];

const categories = ["All", "Heritage", "Visual Arts", "Editorial", "History"];

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = mockArchives.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Header */}
        <section className="bg-brand-card/40 border-b border-brand-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Archive Collection</h1>
            <p className="text-slate-400 max-w-2xl">
              Filter through documented stories, visual records, and cultural analyses curated in RAAKH.
            </p>

            {/* Search & Filter Controls */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition ${
                      selectedCategory === cat
                        ? "bg-brand-ice text-slate-900 shadow-md"
                        : "bg-brand-card text-slate-300 hover:bg-slate-800 border border-brand-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search archives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-card border border-brand-border text-white text-sm pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:border-brand-ice"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grid List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-brand-card/30 rounded-xl border border-brand-border">
              <p className="text-slate-400">No records found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-brand-card/60 border border-brand-border hover:border-brand-ice/50 rounded-xl p-6 flex flex-col justify-between transition duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-ice/10 border border-brand-ice/30 text-brand-ice">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.summary}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                          <Tag className="w-3 h-3 text-slate-500" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-ice hover:underline">
                      <span>View Full Record</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
