const Destination = require("../models/Destination");

// GET ALL DESTINATIONS
const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET SINGLE DESTINATION
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found"
      });
    }

    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE DESTINATION
const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create({
      name: req.body.name,
      description: req.body.description
    });

    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE DESTINATION
const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found"
      });
    }

    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE DESTINATION
const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found"
      });
    }

    res.status(200).json({
      message: "Destination deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
};