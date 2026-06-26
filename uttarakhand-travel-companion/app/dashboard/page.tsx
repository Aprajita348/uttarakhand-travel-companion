"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import { Toaster } from "react-hot-toast";

import { useState, useEffect, useRef } from "react";

import {
  Button,
  Input,
  Loader,
  Toast,
} from "../components/ui";

type Destination = {
  id: number;
  name: string;
  description: string;
};

export default function Home() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const fetchDestinations = () => {
    setLoading(true);

    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setLoading(true);

    const url =
      search.trim() === ""
        ? "http://localhost:5000/api/destinations"
        : `http://localhost:5000/api/search?q=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [search]);

  return (
    <>
      <Toaster />

      <Navbar />

      <div className="p-6">
        <ThemeToggle />
      </div>

      <Hero />

      <div className="p-6">

        <Input
          label="Search Place"
          placeholder="Enter place"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br />

        <Button
          text="Search"
          onClick={handleSearch}
        />

        {loading && (
          <div className="mt-6">
            <Loader />
          </div>
        )}

        <div className="mt-6">
          <Toast />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-6">
        {destinations.length > 0 ? (
          destinations.map((place) => (
            <Card
              key={place.id}
              title={place.name}
              description={place.description}
            />
          ))
        ) : (
          <p className="text-red-500 text-lg">
            No destination found.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}