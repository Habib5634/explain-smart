import Benefit from "@/components/Benefit";
import Footer from "@/components/Footer";
import Healing from "@/components/Healing";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import ThreeWeekProgram from "@/components/ThreeWeekProgram";
import WellnessServices from "@/components/WellnessServise";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <WellnessServices/>
      <ThreeWeekProgram/>
      <Benefit/>
      <Testimonials/>
      <Healing/>
      <Footer/>
    </>
  );
}
