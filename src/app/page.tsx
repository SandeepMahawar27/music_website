import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebnire from "@/components/UpcomingWebnire";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/> 
      <WhyChoseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebnire/>
      <Instructors/>
      <Footer/>
    </div>
  );
}
 