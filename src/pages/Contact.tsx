import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Facebook, Twitter, Instagram, Youtube
} from "lucide-react";

const HERO_IMG="/hero.png"
// const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/9abd7568-25d8-4687-9fb6-23d28023d2cc.png";

const contactInfo = [
  { icon: MapPin, title: "Address", details: ["123 College Road,", "Academic City, State - 400001"] },
  { icon: Phone, title: "Phone", details: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: Mail, title: "Email", details: ["info@prestigecollege.edu", "admissions@prestigecollege.edu"] },
  { icon: Clock, title: "Office Hours", details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"] },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent successfully!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#1E3A5F]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-12 z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <Card key={i} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#2563EB] transition-colors">
                  <info.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{info.title}</h3>
                {info.details.map((d, j) => (
                  <p key={j} className="text-sm text-[#64748B]">{d}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Send us a Message</h2>
                <p className="text-[#64748B] text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Thank You!</h3>
                    <p className="text-[#64748B]">Your message has been sent successfully. We'll respond shortly.</p>
                    <Button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1E3A5F]">Full Name *</Label>
                        <Input
                          id="name" name="name" placeholder="Your full name"
                          value={formData.name} onChange={handleChange}
                          className="border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1E3A5F]">Email Address *</Label>
                        <Input
                          id="email" name="email" type="email" placeholder="your@email.com"
                          value={formData.email} onChange={handleChange}
                          className="border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1E3A5F]">Phone Number</Label>
                        <Input
                          id="phone" name="phone" placeholder="+91 98765 43210"
                          value={formData.phone} onChange={handleChange}
                          className="border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-[#1E3A5F]">Subject</Label>
                        <Input
                          id="subject" name="subject" placeholder="How can we help?"
                          value={formData.subject} onChange={handleChange}
                          className="border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1E3A5F]">Message *</Label>
                      <Textarea
                        id="message" name="message" placeholder="Write your message here..."
                        rows={5} value={formData.message} onChange={handleChange}
                        className="border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB] resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-5 rounded-xl shadow-lg">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map & Social */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1428884319453!2d82.6822857!3d25.83183649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399038ec46006f07%3A0x885f7ba99e66e154!2sVeer%20Bahadur%20Singh%20Purvanchal%20University%20Jaunpur%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1771981436720!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="College Location"
                    className="w-full"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Follow Us on Social Media</h3>
                  <p className="text-white/80 text-sm mb-5">Stay connected with the latest updates, events, and campus life.</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                      { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
                      { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                      { icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href="#"
                        className={`w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center ${social.color} transition-colors`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-[#F59E0B]/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Admission Helpline</h3>
                  <p className="text-[#64748B] text-sm mb-3">For admission-related queries, reach out to our dedicated helpline.</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                    <span className="text-[#1E3A5F] font-bold text-lg">+91 1800-123-4567</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">Toll-free • Available Mon-Sat, 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}