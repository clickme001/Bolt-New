import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-pattern absolute inset-0 opacity-50" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Minds,{" "}
            <span className="text-primary">Shaping Futures</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join a community of innovators, leaders, and lifelong learners. 
            Experience education that transforms potential into excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}