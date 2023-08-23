import {Router} from "express";
import citiesController from '../controllers/citiesController.js';

const {
  createCity,
  createManyCities,
  getAllCities,
  getCityById,
  getCityByName,
  updateCity,
  deleteCity,
  getCitiesByCountry,
  getCitiesByPopulation,
  getCitiesFoundedBefore,
  getFeaturedCities,
  getCitiesByPopulationRange,
  getCitiesByPopulationOrder,
  getCitiesByPopulationRangeAndNameOrder,
  getCitiesWithShortDescriptions,
  getCitiesByCountryAndPopulationOrder
}
= citiesController;

const citiesRouter = Router();

citiesRouter.post('/', createCity);
citiesRouter.post('/', createManyCities);
citiesRouter.get('/', getAllCities);
citiesRouter.get('/id/:id', getCityById);
citiesRouter.get('/:city', getCityByName);
citiesRouter.get('/country/:country', getCitiesByCountry);
citiesRouter.get('/population/:population', getCitiesByPopulation);
citiesRouter.get('/foundedBefore/:date', getCitiesFoundedBefore);
citiesRouter.get('/featured', getFeaturedCities);
citiesRouter.get('/populationRange/:min/:max', getCitiesByPopulationRange);
citiesRouter.get('/populationOrder/:order', getCitiesByPopulationOrder);
citiesRouter.get('/populationNameOrder/:min/:max/:order', getCitiesByPopulationRangeAndNameOrder);
citiesRouter.get('/shortDescriptions', getCitiesWithShortDescriptions);
citiesRouter.get('/countryPopulationOrder/:country/:order', getCitiesByCountryAndPopulationOrder);
citiesRouter.put('/', updateCity);
citiesRouter.delete('/', deleteCity);

export default citiesRouter;