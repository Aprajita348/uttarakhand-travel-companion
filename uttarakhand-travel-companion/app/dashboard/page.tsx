import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="mt-4">
          View saved trips, recommendations and travel plans.
        </p>
      </div>

      <Footer />
    </>
  );
}