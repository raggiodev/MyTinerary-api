import UserModel from "../models/User.js";

const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    }
    catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    }
    catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        updatedUserData,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(updatedUser);
    }
    catch (error) {
      res.status(500).json({ error: "Error updating user" });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await UserModel.create(userData);
      res.status(201).json(newUser);
    }
    catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  },

  deleteUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await UserModel.findByIdAndRemove(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    }
    catch (error) {
      res.status(500).json({ error: "Error deleting user" });
    }
  },

};

export default usersController;