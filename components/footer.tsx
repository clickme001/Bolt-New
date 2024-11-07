"use client";

import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-[#C5A572]" />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-400">
              Empowering minds, shaping futures through excellence in education.
            </p>
          </div>

          <div>
            <h3 className="text-[#C5A572] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-gray-400 hover:text-[#C5A572]">Programs</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-[#C5A572]">Admissions</Link></li>
              <li><Link href="/campus" className="text-gray-400 hover:text-[#C5A572]">Campus Life</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#C5A572]">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C5A572] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Education Street</li>
              <li>Knowledge City, KN 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@excellence.edu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C5A572] font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button className="w-full bg-[#C5A572] hover:bg-[#B39362]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Excellence Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}