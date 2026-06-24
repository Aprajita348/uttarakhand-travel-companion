"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import { useState, useEffect } from "react";
import { Button, Input, Modal, Loader, Toast} from "../components/ui";


export default function Home() {
  const [open, setOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/destinations")
    .then((res) => res.json())
    .then((data) => setDestinations(data))
    .catch((err) => console.error(err));
}, []);
  return (
    <>
    
      <Toaster />
      <Navbar />
      <div className="p-6">
      <ThemeToggle />
      </div>

      <Hero />
      <div className="p-6">

<Button
text="Open Modal"
onClick={()=>setOpen(true)}
/>

</div>

<Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="Welcome"
>

<p>
Welcome to Uttarakhand Travel Companion
</p>

</Modal>
      <div className="p-6">

<Input
label="Search Place"
placeholder="Enter place"
/>

<br/>

<Button
text="Search"
/>
<div className="mt-6">
<Loader />
</div>
<div className="mt-6">
<Toast/>
</div>

</div>

      <div className="grid md:grid-cols-2 gap-4 p-6">
        {destinations.map((place) => (
  <Card
    key={place.id}
    title={place.name}
    description={place.description}
  />
))}
      </div>

      <Footer />
    </>
  );
}