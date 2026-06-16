import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandReviews from "@/components/BrandReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BrandReviews />
      <Footer />
    </main>
  );
}
