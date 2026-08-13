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
    
      
        {/* Header */}
        
          
            Archive Collection
            
              Filter through documented stories, visual records, and cultural analyses curated in RAAKH.
            

            {/* Search & Filter Controls */}
            
              
              {/* Category Pills */}
              
                {categories.map((cat) => (
                   setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition ${
                      selectedCategory === cat
                        ? "bg-brand-ice text-slate-900 shadow-md"
                        : "bg-brand-card text-slate-300 hover:bg-slate-800 border border-brand-border"
                    }`}
                  >
                    {cat}
                  
                ))}
              

              {/* Search Bar */}
              
                
                 setSearchQuery(e.target.value)}
                  className="w-full bg-brand-card border border-brand-border text-white text-sm pl-9 pr-4 py-2 rounded-lg focus:outline-none focus:border-brand-ice"
                />
              

            
          
        

        {/* Grid List */}
        
          {filteredItems.length === 0 ? (
            
              No records found matching your filters.
            
          ) : (
            
              {filteredItems.map((item) => (
                
                  
                    
                      
                        {item.category}
                      
                      
                        
                        {item.date}
                      
                    

                    {item.title}
                    {item.summary}
                  

                  
                    
                      {item.tags.map((tag) => (
                        
                          
                          {tag}
                        
                      ))}
                    

                    
                      View Full Record
                      
                    
                  
                
              ))}
            
          )}
        
      

      
    
  );
}
