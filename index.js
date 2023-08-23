require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const City = require('./models/City');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// Routes
const indexRouter = require('./routers/indexRouter');
app.use('/api', indexRouter);

// Creation of 15 cities
const createInitialCities = async () => {
  try {
    const cities = [
      {
        name: 'City 1',
        photo: 'https://example.com/photo1.jpg',
        country: 'Country 1',
      },
      
    ];

    for (const cityData of cities) {
      const newCity = new City(cityData);
      await newCity.save();
    }

    console.log('15 cities created!');
  } catch (error) {
    console.error('UNDER CONSTRUCTION:', error);
  }
};

createInitialCities();

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
