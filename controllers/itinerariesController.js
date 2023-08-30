import Itinerary from '../models/Itinerary.js';

const itinerariesController = {

  // Crear un nuevo itinerario - POST
  createItinerary: async (req, res) => {
    try {
      const newItinerary = await Itinerary.create(req.body);
      res.status(201).json({ response: newItinerary });
    } catch (error) {
      res.status(500).json({ response: error });
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

  // Obtener un itinerario por ID
  getItineraryById: async (req, res) => {
    try {
      const itinerary = await Itinerary.findById(req.params.id);
      res.status(200).json({ response: itinerary });
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
      res.status(200).json({ response: 'Itinerary deleted successfully' });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  },
};

export default itinerariesController;