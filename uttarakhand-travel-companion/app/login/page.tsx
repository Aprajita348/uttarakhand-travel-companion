import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />

        <button className="bg-green-700 text-white px-6 py-2 rounded w-full">
          Login
        </button>
      </div>

      <Footer />
    </>
  );
}