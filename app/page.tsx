import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import QHSE from "@/components/QHSE";
import ContactForm from "@/components/ContactForm";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <Introduction />
      <Gallery />
      <Services />
      <QHSE />
      <ContactForm />
      <FooterCTA />
      <Footer />
    </div>
  );
}
