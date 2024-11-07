import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#C5A572]" />
            <span className="text-xl font-bold text-black">Excellence Academy</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#C5A572] transition-colors">
              Home
            </Link>
            <Link href="/programs" className="text-gray-800 hover:text-[#C5A572] transition-colors">
              Programs
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#C5A572] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#C5A572] transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-[#C5A572] hover:bg-[#B39362] text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
}