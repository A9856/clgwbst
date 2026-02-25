import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap, Users, BookOpen, Award, ArrowRight,
  Monitor, Wrench, Building2, Zap, Briefcase, Palette,
  Calendar, Trophy, Star
} from "lucide-react";

const HERO_IMG="/hero.png";
const CAMPUS_IMG="/camp.png";
// const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/9abd7568-25d8-4687-9fb6-23d28023d2cc.png";
// const CAMPUS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/29b85865-3a4b-434b-a6c0-7c2993d423d7.png";

const stats = [
  { icon: Users, value: "5,000+", label: "Students", color: "from-blue-500 to-blue-600" },
  { icon: GraduationCap, value: "200+", label: "Faculty Members", color: "from-amber-500 to-orange-500" },
  { icon: BookOpen, value: "50+", label: "Courses Offered", color: "from-emerald-500 to-green-600" },
  { icon: Award, value: "35+", label: "Years of Excellence", color: "from-purple-500 to-violet-600" },
];

const departments = [
  { icon: Monitor, name: "Computer Science", desc: "AI, ML, Web Development & more", color: "bg-blue-500" },
  { icon: Wrench, name: "Mechanical Engg.", desc: "Design, Manufacturing & Robotics", color: "bg-orange-500" },
  { icon: Building2, name: "Civil Engineering", desc: "Structures, Planning & Design", color: "bg-emerald-500" },
  { icon: Zap, name: "Electrical Engg.", desc: "Power Systems & Electronics", color: "bg-yellow-500" },
  { icon: Briefcase, name: "Commerce", desc: "Accounting, Finance & Business", color: "bg-purple-500" },
  { icon: Palette, name: "Arts & Humanities", desc: "Literature, History & Culture", color: "bg-pink-500" },
];

const news = [
  { icon: Calendar, title: "Annual Tech Fest 2026", date: "March 15-17, 2026", desc: "Join us for 3 days of innovation, workshops, and competitions." },
  { icon: Trophy, title: "National Hackathon Winners", date: "February 10, 2026", desc: "Our CS team won 1st place at the National Coding Championship." },
  { icon: Star, title: "New Research Lab Inaugurated", date: "January 25, 2026", desc: "State-of-the-art AI & Robotics lab now open for students." },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-6");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="College Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E3A5F]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Star className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-white/90 text-sm font-medium">NAAC A++ Accredited Institution</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#F59E0B] bg-clip-text text-transparent">
                Prestige College
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Empowering minds, shaping futures. Discover world-class education with 35+ years of academic excellence, innovative research, and holistic development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                  Explore More <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="!bg-transparent border-2 border-white/40 text-white !hover:bg-white/10 px-8 py-6 text-base rounded-xl backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="scroll-animate opacity-0 translate-y-8 duration-500 bg-white border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-sm text-[#64748B] mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate opacity-0 translate-y-8 duration-500">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Our Departments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">Academic Excellence Across Disciplines</h2>
            <p className="text-[#64748B] mt-3 max-w-2xl mx-auto">
              Explore our diverse range of departments, each offering cutting-edge curriculum and hands-on learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <Link to="/departments" key={i}>
                <Card
                  className="scroll-animate opacity-0 translate-y-8 duration-500 group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 bg-white"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`w-12 h-12 ${dept.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E3A5F] text-lg group-hover:text-[#2563EB] transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-[#64748B] mt-1">{dept.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#64748B] ml-auto mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/departments">
              <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-5 rounded-xl">
                View All Departments <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Image Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAMPUS_IMG} alt="Campus Aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1E3A5F]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0 translate-y-8 duration-500">
            A Campus Built for the Future
          </h2>
          <p className="text-white/80 text-lg mb-8 scroll-animate opacity-0 translate-y-8 duration-500">
            Spread across 50 acres, our campus features modern classrooms, state-of-the-art labs, a digital library, sports complex, and lush green spaces designed to inspire learning and creativity.
          </p>
          <Link to="/gallery">
            <Button className="bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold px-8 py-5 rounded-xl scroll-animate opacity-0 translate-y-8 duration-500">
              Explore Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate opacity-0 translate-y-8 duration-500">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">News & Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <Card
                key={i}
                className="scroll-animate opacity-0 translate-y-8 duration-500 border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <item.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-[#2563EB] font-medium">{item.date}</span>
                  <h3 className="font-semibold text-[#1E3A5F] text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 scroll-animate opacity-0 translate-y-8 duration-500">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 scroll-animate opacity-0 translate-y-8 duration-500">
            Admissions are now open for 2026-27. Take the first step towards a brighter future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 scroll-animate opacity-0 translate-y-8 duration-500">
            <Link to="/contact">
              <Button className="bg-[#F59E0B] hover:bg-[#d97706] text-[#0F172A] font-semibold px-8 py-5 rounded-xl shadow-lg">
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="!bg-transparent border-2 border-white/40 text-white !hover:bg-white/10 px-8 py-5 rounded-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}