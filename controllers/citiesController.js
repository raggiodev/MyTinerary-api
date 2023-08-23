import City from "../models/City.js";

const citiesController = {};

// Crear una ciudad
citiesController.createCity = async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    res.status(201).json({ response: newCity });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Crear muchas ciudades
citiesController.createManyCities = async (req, res, next) => {
  try {
      let cities = await City.insertMany(req.body)
      res.status(201).json({ response: cities})
  } catch (err) {
      res.status(500).json({ response: err})
  }
},

// Obtener todas las ciudades
citiesController.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json({ response: cities });
    //res.send("Está funcionando")
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener una ciudad por ID
citiesController.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    res.status(200).json({ response: city });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener una ciudad por nombre
citiesController.getCityByName = async (req, res) => {
  try {
    const city = await City.findOne({ city: req.params.city });
    res.status(200).json({ response: city });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Actualizar una ciudad por ID
citiesController.updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );
    res.status(200).json({ response: updatedCity });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Eliminar una ciudad por ID
citiesController.deleteCity = async (req, res) => {
  try {
    await City.findByIdAndDelete(req.body._id);
    res.status(200).json({ response: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades por país
citiesController.getCitiesByCountry = async (req, res) => {
  try {
    const cities = await City.find({ country: req.params.country });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades con población mayor a un valor dado
citiesController.getCitiesByPopulation = async (req, res) => {
  try {
    const cities = await City.find({ population: { $gt: req.params.population } });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades fundadas antes de una fecha 'X'
citiesController.getCitiesFoundedBefore = async (req, res) => {
  try {
    const cities = await City.find({ fundation: { $lt: req.params.date } });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades destacadas (población > 1000000)
citiesController.getFeaturedCities = async (req, res) => {
  try {
    const cities = await City.find({ population: { $gt: 1000000 } });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades por rango de población
citiesController.getCitiesByPopulationRange = async (req, res) => {
  try {
    const minPopulation = parseInt(req.params.min);
    const maxPopulation = parseInt(req.params.max);
    const cities = await City.find({ population: { $gte: minPopulation, $lte: maxPopulation } });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades ordenadas por población
citiesController.getCitiesByPopulationOrder = async (req, res) => {
  try {
    const sortOrder = req.params.order === 'asc' ? 1 : -1;
    const cities = await City.find().sort({ population: sortOrder });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades por rango de población y ordenadas por nombre
citiesController.getCitiesByPopulationRangeAndNameOrder = async (req, res) => {
  try {
    const minPopulation = parseInt(req.params.min);
    const maxPopulation = parseInt(req.params.max);
    const sortOrder = req.params.order === 'asc' ? 1 : -1;
    const cities = await City.find({ population: { $gte: minPopulation, $lte: maxPopulation } })
      .sort({ city: sortOrder });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades con descripciones cortas
citiesController.getCitiesWithShortDescriptions = async (req, res) => {
  try {
    const cities = await City.find({}, { smalldescription: 1, city: 1 });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

// Obtener ciudades por país y ordenadas por población
citiesController.getCitiesByCountryAndPopulationOrder = async (req, res) => {
  try {
    const sortOrder = req.params.order === 'asc' ? 1 : -1;
    const cities = await City.find({ country: req.params.country })
      .sort({ population: sortOrder });
    res.status(200).json({ response: cities });
  } catch (error) {
    res.status(500).json({ response: error });
  }
};

export default citiesController;