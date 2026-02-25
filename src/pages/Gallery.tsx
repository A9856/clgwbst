import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

const HERO_IMG="/hero.png";
const LIBRARY_IMG="/library.png";
const CAMPUS_IMG="/camp.png";
const LAB_IMG="/lab.png"
// const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/9abd7568-25d8-4687-9fb6-23d28023d2cc.png";
// const LIBRARY_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/9d66da81-6013-4f9e-a7e0-6095b204a7b6.png";
// const CAMPUS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/29b85865-3a4b-434b-a6c0-7c2993d423d7.png";
// const LAB_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/971693/2026-02-22/76b388bf-c9e8-4aa4-9fc9-d4275f658308.png";

type Category = "All" | "Campus" | "Events" | "Sports" | "Labs" | "Cultural";

interface GalleryImage {
  src: string;
  title: string;
  category: Category;
}

const galleryImages: GalleryImage[] = [
  { src: HERO_IMG, title: "Main College Building", category: "Campus" },
  { src: LIBRARY_IMG, title: "Central Library", category: "Campus" },
  { src: CAMPUS_IMG, title: "Aerial Campus View", category: "Campus" },
  { src: LAB_IMG, title: "Computer Science Lab", category: "Labs" },
  { src: HERO_IMG, title: "Annual Day Celebration", category: "Events" },
  { src: CAMPUS_IMG, title: "Sports Ground", category: "Sports" },
  { src: LIBRARY_IMG, title: "Reading Room", category: "Campus" },
  { src: LAB_IMG, title: "Robotics Workshop", category: "Labs" },
  { src: HERO_IMG, title: "Cultural Festival", category: "Cultural" },
  { src: CAMPUS_IMG, title: "Cricket Tournament", category: "Sports" },
  { src: LIBRARY_IMG, title: "Book Exhibition", category: "Events" },
  { src: LAB_IMG, title: "Electronics Lab", category: "Labs" },
  { src: HERO_IMG, title: "Dance Competition", category: "Cultural" },
  { src: CAMPUS_IMG, title: "Basketball Court", category: "Sports" },
  { src: LIBRARY_IMG, title: "Seminar Hall", category: "Events" },
  { src: LAB_IMG, title: "Physics Lab", category: "Labs" },
];

const categories: Category[] = ["All", "Campus", "Events", "Sports", "Labs", "Cultural"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };
  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAMPUS_IMG} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#1E3A5F]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore moments captured across our vibrant campus life, events, and activities.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white sticky top-16 md:top-20 z-30 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 transition-all ${
                  activeCategory === cat
                    ? "bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-md"
                    : "!bg-transparent border-gray-300 text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB]"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, i) => (
              <div
                key={`${img.title}-${i}`}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] shadow-md hover:shadow-xl transition-all"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{img.title}</p>
                    <span className="text-white/70 text-xs">{img.category}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#64748B] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10 text-white text-2xl"
          >
            ‹
          </button>

          <div className="max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filteredImages[lightboxIndex].title}</p>
              <p className="text-white/60 text-sm">{filteredImages[lightboxIndex].category} • {lightboxIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10 text-white text-2xl"
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}