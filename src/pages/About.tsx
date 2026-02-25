import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen, Lightbulb, Globe } from "lucide-react";

const CAMPUS_IMG="/camp.png";
// const CAMPUS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/29b85865-3a4b-434b-a6c0-7c2993d423d7.png";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Encouraging creative thinking and cutting-edge research across all disciplines." },
  { icon: Heart, title: "Integrity", desc: "Upholding the highest standards of ethics, honesty, and academic excellence." },
  { icon: Users, title: "Inclusivity", desc: "Creating a diverse and welcoming environment for students from all backgrounds." },
  { icon: Globe, title: "Global Outlook", desc: "Preparing students to thrive in an interconnected, globalized world." },
];

const achievements = [
  { value: "A++", label: "NAAC Accreditation" },
  { value: "Top 50", label: "National Ranking" },
  { value: "95%", label: "Placement Rate" },
  { value: "120+", label: "Research Papers/Year" },
  { value: "50+", label: "Industry Partners" },
  { value: "25+", label: "International Collaborations" },
];

const facilities = [
  { icon: BookOpen, name: "Digital Library", desc: "50,000+ books and e-resources" },
  { icon: Award, name: "Sports Complex", desc: "Indoor & outdoor facilities" },
  { icon: Lightbulb, name: "Innovation Hub", desc: "Startup incubation center" },
  { icon: Globe, name: "Smart Classrooms", desc: "ICT-enabled learning spaces" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAMPUS_IMG} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#1E3A5F]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover the legacy, vision, and values that make Prestige College a beacon of academic excellence.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2 mb-6">
                35+ Years of Shaping Futures
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Founded in 1985, Prestige College of Excellence began with a vision to provide quality education accessible to all. What started as a small institution with just 3 departments and 200 students has grown into one of the most respected colleges in the region.
                </p>
                <p>
                  Over the decades, we have continuously evolved our curriculum, embraced technology, and expanded our facilities to meet the changing demands of the modern world. Our alumni network spans across 40+ countries, with graduates excelling in diverse fields.
                </p>
                <p>
                  Today, with 6 departments, 50+ courses, and a vibrant community of 5,000+ students, we continue our mission of empowering minds and building future leaders.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2563EB]/10 to-[#F59E0B]/10 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Principal's Message</h3>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed italic">
                    "At Prestige College, we believe education goes beyond textbooks. We nurture critical thinking, creativity, and character. Our goal is to prepare students not just for careers, but for life. I invite you to be part of our journey of excellence."
                  </p>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-[#1E3A5F]">Dr. Rajesh Kumar</p>
                    <p className="text-xs text-[#64748B]">Principal, Prestige College of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] text-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/85 leading-relaxed">
                  To provide transformative education that empowers students with knowledge, skills, and values to become responsible global citizens. We are committed to fostering innovation, promoting research, and creating an inclusive learning environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#F59E0B] to-[#d97706] text-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/85 leading-relaxed">
                  To be a globally recognized institution of higher learning, known for academic excellence, groundbreaking research, and producing leaders who drive positive change in society and industry.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white text-center group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <val.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F] text-lg mb-2">{val.title}</h3>
                  <p className="text-sm text-[#64748B]">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2563EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Achievements</h2>
            <p className="text-white/70 mt-3">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((item, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-[#F59E0B]">{item.value}</div>
                <div className="text-xs text-white/80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Campus Life</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">World-Class Facilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-[#F8FAFC] group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-[#2563EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <fac.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F] mb-1">{fac.name}</h3>
                  <p className="text-sm text-[#64748B]">{fac.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}