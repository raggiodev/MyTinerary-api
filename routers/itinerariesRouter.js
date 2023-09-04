import {Router} from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router();

// Crear un nuevo itinerario - POST
itinerariesRouter.post('/', itinerariesController.createItinerary);

// Obtener todos los itinerarios - GET
itinerariesRouter.get('/', itinerariesController.getAllItineraries);

// Obtener un itinerario por su ID - GET
itinerariesRouter.get('/:cityId', itinerariesController.getItineraryById); // /:cityId

export default itinerariesRouter;