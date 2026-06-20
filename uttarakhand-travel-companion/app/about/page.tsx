import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="mt-4">
          AI Powered Uttarakhand Travel & Homestay Companion helps
          travelers discover destinations, homestays and personalized
          itineraries.
        </p>
      </div>

      <Footer />
    </>
  );
}