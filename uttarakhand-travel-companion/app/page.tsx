import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-2 gap-4 p-6">
        <Card
          title="Nainital"
          description="Beautiful lake city surrounded by mountains."
        />

        <Card
          title="Mussoorie"
          description="Queen of Hills with amazing views."
        />

        <Card
          title="Rishikesh"
          description="Yoga capital and adventure destination."
        />

        <Card
          title="Kedarnath"
          description="Famous pilgrimage destination in Uttarakhand."
        />
      </div>

      <Footer />
    </>
  );
}