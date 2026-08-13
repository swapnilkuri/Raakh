"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      
        
          
          {/* Logo */}
          
            
              
              RAAKH
            
          

          {/* Desktop Navigation Links */}
          
            
              Home
              About
              Archive
              Contact
            
          

          {/* Action Button */}
          
            
              Explore Now
            
          

          {/* Mobile menu button */}
          
             setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-brand-card focus:outline-none"
            >
              {isOpen ?  : }
            
          

        
      

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        
          Home
          About
          Archive
          Contact
          Explore Now
        
      )}
    
  );
}
