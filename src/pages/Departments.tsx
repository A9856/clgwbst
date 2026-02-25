import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Monitor, Wrench, Building2, Zap, Briefcase, Palette,
  Users, BookOpen, Star, ChevronLeft, ChevronRight, Quote
} from "lucide-react";

// const LAB_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/76b388bf-c9e8-4aa4-9fc9-d4275f658308.png";
const LAB_IMG="/lab.png"
const departments = [
  {
    icon: Monitor, name: "Computer Science & Engineering", color: "bg-blue-500", lightColor: "bg-blue-50",
    hod: "Dr. Anita Sharma", students: 850, courses: 12,
    desc: "Our CSE department is at the forefront of technology education, offering programs in AI, Machine Learning, Cybersecurity, Web Development, and Cloud Computing. Students work on real-world projects with industry partners.",
    highlights: ["AI & ML Lab", "Hackathon Champions", "100% Placement", "Industry Partnerships"]
  },
  {
    icon: Wrench, name: "Mechanical Engineering", color: "bg-orange-500", lightColor: "bg-orange-50",
    hod: "Dr. Vikram Patel", students: 720, courses: 10,
    desc: "The Mechanical Engineering department combines traditional engineering principles with modern manufacturing technologies including CAD/CAM, Robotics, and 3D Printing.",
    highlights: ["Robotics Club", "CAD/CAM Lab", "SAE Racing Team", "Research Center"]
  },
  {
    icon: Building2, name: "Civil Engineering", color: "bg-emerald-500", lightColor: "bg-emerald-50",
    hod: "Dr. Priya Menon", students: 580, courses: 9,
    desc: "Our Civil Engineering program focuses on sustainable construction, urban planning, structural design, and environmental engineering with hands-on field experience.",
    highlights: ["Surveying Lab", "Green Building", "Smart City Projects", "Field Visits"]
  },
  {
    icon: Zap, name: "Electrical Engineering", color: "bg-yellow-500", lightColor: "bg-yellow-50",
    hod: "Dr. Suresh Nair", students: 620, courses: 11,
    desc: "The Electrical Engineering department covers power systems, renewable energy, embedded systems, and IoT. Our labs are equipped with the latest testing and simulation tools.",
    highlights: ["Power Systems Lab", "IoT Workshop", "Solar Projects", "Industry Visits"]
  },
  {
    icon: Briefcase, name: "Commerce & Business", color: "bg-purple-500", lightColor: "bg-purple-50",
    hod: "Dr. Meena Gupta", students: 950, courses: 8,
    desc: "Our Commerce department prepares students for the business world with programs in Accounting, Finance, Marketing, and Entrepreneurship with real case studies.",
    highlights: ["Business Incubator", "CA Coaching", "Stock Market Lab", "Guest Lectures"]
  },
  {
    icon: Palette, name: "Arts & Humanities", color: "bg-pink-500", lightColor: "bg-pink-50",
    hod: "Dr. Kavita Reddy", students: 480, courses: 7,
    desc: "The Arts & Humanities department nurtures creativity and critical thinking through programs in Literature, History, Psychology, and Fine Arts.",
    highlights: ["Art Gallery", "Literary Club", "Cultural Fest", "Research Journal"]
  },
];

const testimonials = [
  {
    name: "Priya Sharma", dept: "Computer Science", year: "2024 Batch", rating: 5,
    text: "Prestige College transformed my life. The CSE department's practical approach and amazing faculty helped me land a job at Google. The coding culture here is incredible!",
    avatar: "PS"
  },
  {
    name: "Rahul Verma", dept: "Mechanical Engineering", year: "2023 Batch", rating: 5,
    text: "The hands-on experience in the robotics lab and the SAE racing team gave me skills that no textbook could. I'm now working at Tata Motors thanks to the placement cell.",
    avatar: "RV"
  },
  {
    name: "Ananya Patel", dept: "Commerce", year: "2024 Batch", rating: 5,
    text: "The business incubator program helped me start my own e-commerce venture while still in college. The mentorship from faculty was invaluable.",
    avatar: "AP"
  },
  {
    name: "Karthik Nair", dept: "Civil Engineering", year: "2023 Batch", rating: 4,
    text: "Field visits to real construction sites and the smart city project gave me practical knowledge that set me apart in interviews. Great infrastructure!",
    avatar: "KN"
  },
  {
    name: "Sneha Reddy", dept: "Arts & Humanities", year: "2024 Batch", rating: 5,
    text: "The literary club and cultural fest were highlights of my college life. The faculty encouraged us to think critically and express ourselves freely.",
    avatar: "SR"
  },
  {
    name: "Amit Kumar", dept: "Electrical Engineering", year: "2023 Batch", rating: 5,
    text: "Working on the solar energy project in our final year was an incredible experience. The department's focus on renewable energy prepared me for the future.",
    avatar: "AK"
  },
];

export default function DepartmentsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={LAB_IMG} alt="Lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#1E3A5F]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Six diverse departments offering world-class education with modern facilities and expert faculty.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {departments.map((dept, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Color Bar */}
                    <div className={`${dept.color} w-full lg:w-2 h-2 lg:h-auto shrink-0`} />

                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                          <dept.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-[#1E3A5F]">{dept.name}</h3>
                          <p className="text-sm text-[#64748B] mt-1">HOD: {dept.hod}</p>
                          <p className="text-[#64748B] mt-3 leading-relaxed">{dept.desc}</p>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="w-4 h-4 text-[#2563EB]" />
                              <span className="text-[#1E3A5F] font-medium">{dept.students} Students</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <BookOpen className="w-4 h-4 text-[#2563EB]" />
                              <span className="text-[#1E3A5F] font-medium">{dept.courses} Courses</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {dept.highlights.map((h, j) => (
                              <Badge key={j} variant="secondary" className={`${dept.lightColor} text-[#1E3A5F] border-0`}>
                                {h}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider">Student Voices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Students Say</h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <Card key={i} className="border-0 bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#F59E0B] mb-4 opacity-60" />
                  <p className="text-white/85 text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{t.name}</p>
                      <p className="text-white/60 text-xs">{t.dept} • {t.year}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Card className="border-0 bg-white/10 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-[#F59E0B] mb-4 opacity-60" />
                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonials[currentTestimonial].name}</p>
                    <p className="text-white/60 text-xs">
                      {testimonials[currentTestimonial].dept} • {testimonials[currentTestimonial].year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="!bg-transparent border-white/30 text-white hover:!bg-white/10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentTestimonial ? "bg-[#F59E0B] w-6" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="!bg-transparent border-white/30 text-white hover:!bg-white/10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Second row for desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(3, 6).map((t, i) => (
              <Card key={i} className="border-0 bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[#F59E0B] mb-4 opacity-60" />
                  <p className="text-white/85 text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{t.name}</p>
                      <p className="text-white/60 text-xs">{t.dept} • {t.year}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
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