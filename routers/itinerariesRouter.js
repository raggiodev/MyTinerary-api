import {Router} from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router();

// Creación de routers para obtener los itinerarios por 'city'
itinerariesRouter.post('/:cityId/itineraries', itinerariesController.createItinerary);
itinerariesRouter.get('/:cityId/itineraries', itinerariesController.getItinerariesByCity);

export default itinerariesRouter;