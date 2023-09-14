import Activity from "../models/Activity.js";

const ActivitiesController = {
  createOneActivity: async (req, res, next) => {
    try {
      let activity = await Activity.create(req.body);

      res.status(201).json({ response: activity });
    } catch (err) {
      next(err);
    }
  },

  createManyActivities: async (req, res, next) => {
    try {
      let activities = await Activity.insertMany(req.body);
      res.status(201).json({ response: activities });
    } catch (err) {
      next(err);
    }
  },

  createAllActivities: async (req, res, next) => {
    try {
      let activities = await Activity.find();
      res.status(200).json({ response: activities });
    } catch (err) {
      next(err);
    }
  },

  createAllActivitiesByItinerary: async (req, res, next) => {
    try {
      let activities = await Activity.find({
        itineraryId: req.params.itineraryId,
      });
      res.status(200).json({ response: activities });
    } catch (err) {
      next(err);
    }
  },

  createOneActivityById: async (req, res, next) => {
    try {
      let activity = await Activity.findById(req.params.id);
      res.status(200).json({ response: activity });
    } catch (err) {
      next(err);
    }
  },

  createOneActivityByName: async (req, res, next) => {
    try {
      let activity = await Activity.findOne({ name: req.params.activity });
      res.status(200).json({ response: activity });
    } catch (err) {
      next(err);
    }
  },

  updateOneActivity: async (req, res, next) => {
    try {
      let activity = await Activity.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
      res.status(200).json({ response: activity });
    } catch (err) {
      next(err);
    }
  },

  deleteOneActivity: async (req, res, next) => {
    try {
      await Activity.findByIdAndDelete(req.body._id);
      res.status(200).json({ response: "resource deleted successfully" });
    } catch (err) {
      next(err);
    }
  },
};

export default ActivitiesController;