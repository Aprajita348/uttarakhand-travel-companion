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
  const [name, setName] = useState("");
const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
const [isEditing, setIsEditing] = useState(false);

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
  const addDestination = () => {
  if (name.trim() === "" || description.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  setLoading(true);

  fetch("http://localhost:5000/api/destinations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      setName("");
      setDescription("");
      fetchDestinations(); // cards refresh ho jayenge
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
};
const deleteDestination = (id: number) => {
  fetch(`http://localhost:5000/api/destinations/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      fetchDestinations(); // Delete ke baad cards refresh
    })
    .catch((err) => console.error(err));
};
const handleEdit = (place: Destination) => {
  setName(place.name);
  setDescription(place.description);

  setEditId(place.id);
  setIsEditing(true);
};
const updateDestination = () => {
  if (editId === null) return;

  fetch(`http://localhost:5000/api/destinations/${editId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      setName("");
      setDescription("");
      setEditId(null);
      setIsEditing(false);

      fetchDestinations();
    })
    .catch((err) => console.error(err));
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
        <h2 className="text-2xl font-bold mb-4">
  Add New Destination
</h2>

<Input
  label="Destination Name"
  placeholder="Enter destination name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<br />

<Input
  label="Description"
  placeholder="Enter description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
<br />


<Button
  text={isEditing ? "Update Destination" : "Add Destination"}
  onClick={isEditing ? updateDestination : addDestination}
/>

<br />
<br />

<br />
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
              onDelete={() => deleteDestination(place.id)}
              onEdit={() => handleEdit(place)}
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