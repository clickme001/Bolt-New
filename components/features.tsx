import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Building, Trophy } from "lucide-react";

const features = [
  {
    title: "World-Class Programs",
    description: "Comprehensive curriculum designed by industry experts and leading academics.",
    icon: BookOpen,
  },
  {
    title: "Expert Faculty",
    description: "Learn from distinguished professors and industry professionals.",
    icon: Users,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art campus with cutting-edge technology and resources.",
    icon: Building,
  },
  {
    title: "Student Success",
    description: "Outstanding achievement record with global recognition and placements.",
    icon: Trophy,
  },
];

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose Excellence Academy?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide an exceptional learning environment that nurtures talent and drives innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}