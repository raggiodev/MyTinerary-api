import {Router} from 'express';
import citiesController from '../controllers/citiesController.js';

const citiesRouter = Router();

// Creación de routes para 'cities'
citiesRouter.post('/', citiesController.createCity);
citiesRouter.post('/many/', citiesController.createManyCities);

citiesRouter.get('/', citiesController.getAllCities);
citiesRouter.get('/id/:id', citiesController.getCityById);
citiesRouter.get('/:city', citiesController.getCityByName);
citiesRouter.get('/country/:country', citiesController.getCitiesByCountry);
citiesRouter.get('/population/:population', citiesController.getCitiesByPopulation);
citiesRouter.get('/foundedBefore/:date', citiesController.getCitiesFoundedBefore);
citiesRouter.get('/featured', citiesController.getFeaturedCities);
citiesRouter.get('/populationRange/:min/:max', citiesController.getCitiesByPopulationRange);
citiesRouter.get('/populationOrder/:order', citiesController.getCitiesByPopulationOrder);
citiesRouter.get('/populationNameOrder/:min/:max/:order', citiesController.getCitiesByPopulationRangeAndNameOrder);
citiesRouter.get('/shortDescriptions', citiesController.getCitiesWithShortDescriptions);
citiesRouter.get('/countryPopulationOrder/:country/:order', citiesController.getCitiesByCountryAndPopulationOrder);

citiesRouter.put('/', citiesController.updateCity);

citiesRouter.delete('/', citiesController.deleteCity);

export default citiesRouter;