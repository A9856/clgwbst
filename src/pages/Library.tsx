import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Clock, Users, Wifi, Monitor, Coffee,
  BookMarked, Globe, Newspaper, FileText, Search, Download
} from "lucide-react";

// const LIBRARY_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/9d66da81-6013-4f9e-a7e0-6095b204a7b6.png";
const LIBRARY_IMG="/library.png";
const resources = [
  { icon: BookMarked, name: "Physical Books", count: "50,000+", desc: "Textbooks, references, and journals across all departments" },
  { icon: Globe, name: "E-Books & Journals", count: "25,000+", desc: "Digital access to international publications and databases" },
  { icon: Newspaper, name: "Periodicals", count: "200+", desc: "Daily newspapers, magazines, and weekly publications" },
  { icon: FileText, name: "Research Papers", count: "10,000+", desc: "Access to IEEE, Springer, Elsevier, and more" },
  { icon: Search, name: "OPAC System", count: "24/7", desc: "Online Public Access Catalog for easy book search" },
  { icon: Download, name: "Digital Repository", count: "5,000+", desc: "Past papers, thesis, and project reports" },
];

const facilities = [
  { icon: Monitor, name: "Digital Zone", desc: "50 computers with high-speed internet for research and e-learning" },
  { icon: Users, name: "Reading Hall", desc: "300-seat air-conditioned reading hall with individual study desks" },
  { icon: Coffee, name: "Discussion Rooms", desc: "4 group discussion rooms for collaborative study sessions" },
  { icon: Wifi, name: "Wi-Fi Zone", desc: "Free high-speed Wi-Fi across the entire library premises" },
];

const timings = [
  { day: "Monday - Friday", time: "8:00 AM - 9:00 PM" },
  { day: "Saturday", time: "9:00 AM - 6:00 PM" },
  { day: "Sunday", time: "10:00 AM - 4:00 PM" },
  { day: "Exam Period", time: "7:00 AM - 11:00 PM" },
];

const rules = [
  "Maintain silence in the reading hall at all times",
  "Valid college ID card is mandatory for entry",
  "Maximum 3 books can be borrowed at a time",
  "Return books within 14 days to avoid late fees",
  "No food or beverages inside the library",
  "Handle books and equipment with care",
  "Report any damaged books to the librarian",
  "Mobile phones must be on silent mode",
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={LIBRARY_IMG} alt="Library" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#1E3A5F]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">College Library</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A treasure trove of knowledge with 50,000+ books, digital resources, and modern study spaces.
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, value: "50,000+", label: "Books" },
            { icon: Users, value: "300", label: "Seating Capacity" },
            { icon: Monitor, value: "50", label: "Computers" },
            { icon: Clock, value: "13 hrs", label: "Daily Access" },
          ].map((stat, i) => (
            <Card key={i} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all">
              <CardContent className="p-5 text-center">
                <div className="w-10 h-10 mx-auto bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="text-xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-xs text-[#64748B]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">Library Resources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">
                      <res.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#1E3A5F]">{res.name}</h3>
                        <Badge variant="secondary" className="bg-[#F59E0B]/10 text-[#F59E0B] border-0 text-xs">
                          {res.count}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#64748B]">{res.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Modern Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mt-2">Library Facilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] text-white group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <fac.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{fac.name}</h3>
                  <p className="text-sm text-white/80">{fac.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timings & Rules */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Timings */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F]">Library Timings</h3>
                </div>
                <div className="space-y-4">
                  {timings.map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-[#1E3A5F] font-medium">{t.day}</span>
                      <Badge variant="secondary" className="bg-[#2563EB]/10 text-[#2563EB] border-0">
                        {t.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F]">Library Rules</h3>
                </div>
                <ul className="space-y-3">
                  {rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#64748B]">
                      <span className="w-6 h-6 bg-[#F59E0B]/10 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-[#F59E0B]">
                        {i + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}