const express = require("express");
const router = express.Router();

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} = require("../controllers/destinationController");

// GET all destinations
router.get("/", getAllDestinations);

// GET single destination
router.get("/:id", getDestinationById);

// CREATE destination
router.post("/", createDestination);

// UPDATE destination
router.put("/:id", updateDestination);

// DELETE destination
router.delete("/:id", deleteDestination);

module.exports = router;