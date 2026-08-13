import Link from "next/link";
import { Sparkles, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-brand-border text-slate-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <Sparkles className="w-5 h-5 text-brand-ice" />
              <span>RAAKH</span>
            </Link>
            <p className="text-sm text-slate-400">
              A modern digital platform dedicated to archival storytelling, cultural visual design, and structured content.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand-ice transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-ice transition">About</Link></li>
              <li><Link href="/archive" className="hover:text-brand-ice transition">Archive</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/documentation" className="hover:text-brand-ice transition">Documentation</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-ice transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-ice transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-brand-ice transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@raakh.com" className="hover:text-brand-ice transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-brand-border text-center text-xs text-slate-500">
          © {new Date().getFullYear()} RAAKH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
