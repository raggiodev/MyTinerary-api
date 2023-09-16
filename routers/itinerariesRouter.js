import {Router} from 'express';
import itinerariesController from '../controllers/itinerariesController.js';

const itinerariesRouter = Router();

// Creación de routers para obtener los itinerarios por 'city'
itinerariesRouter.post('/', itinerariesController.createItinerary);
itinerariesRouter.get('/id/:id', itinerariesController.getOneItinerary);
itinerariesRouter.get('/:cityId', itinerariesController.getItinerariesByCity);

export default itinerariesRouter;