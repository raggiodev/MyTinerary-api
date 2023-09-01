import Itinerary from "../models/Itinerary.js";

const itinerariesController = {
  // Crear un nuevo itinerario - POST
  createItinerary: async (req, res) => {
    try {
      const { title, author, price, duration, hashtags, city } = req.body;

      const newItinerary = new Itinerary({
        title,
        author,
        price,
        duration,
        hashtags,
        city,
      });

      const savedItinerary = await newItinerary.save();

      res.status(201).json(savedItinerary);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating itinerary" });
    }
  },

  // Obtener todos los itinerarios
  getAllItineraries: async (req, res) => {
    try {
      const itineraries = await Itinerary.find();
      res.status(200).json({ response: itineraries });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  },

  // Obtener itinerarios por ID de ciudad
  getItinerariesByCity: async (req, res) => {
    try {
      const cityId = req.params.cityId;
      const itineraries = await Itinerary.find({ city: cityId });
      res.status(200).json({ response: itineraries });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  },

  // Actualizar un itinerario por ID
  updateItinerary: async (req, res) => {
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ response: updatedItinerary });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  },

  // Eliminar un itinerario por ID
  deleteItinerary: async (req, res) => {
    try {
      await Itinerary.findByIdAndDelete(req.params.id);
      res.status(200).json({ response: "Itinerary deleted successfully" });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  },
};

export default itinerariesController;