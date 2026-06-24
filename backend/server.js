const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let destinations = [
  {
    id: 1,
    name: "Mussoorie",
    description: "Queen of Hills"
  },
  {
    id: 2,
    name: "Nainital",
    description: "Lake City"
  }
];

// GET ALL
app.get("/api/destinations", (req, res) => {
  res.status(200).json(destinations);
});

// GET ONE
app.get("/api/destinations/:id", (req, res) => {
  const destination = destinations.find(
    d => d.id === parseInt(req.params.id)
  );

  if (!destination) {
    return res.status(404).json({
      message: "Destination not found"
    });
  }

  res.status(200).json(destination);
});

// POST
app.post("/api/destinations", (req, res) => {
  const newDestination = {
    id: Date.now(),
    name: req.body.name,
    description: req.body.description
  };

  destinations.push(newDestination);

  res.status(201).json(newDestination);
});

// PUT
app.put("/api/destinations/:id", (req, res) => {
  const destination = destinations.find(
    d => d.id === parseInt(req.params.id)
  );

  if (!destination) {
    return res.status(404).json({
      message: "Destination not found"
    });
  }

  destination.name = req.body.name;
  destination.description = req.body.description;

  res.status(200).json(destination);
});

// DELETE
app.delete("/api/destinations/:id", (req, res) => {
  destinations = destinations.filter(
    d => d.id !== parseInt(req.params.id)
  );

  res.status(204).send();
});

// SEARCH
app.get("/api/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const result = destinations.filter(d =>
    d.name.toLowerCase().includes(q)
  );

  res.status(200).json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});