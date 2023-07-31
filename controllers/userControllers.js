import User from '../model/user.js'

export const createNewUserController =  async (req, res) => {
    try {
      const {name, username, profilePicture, email} = req.body;
      const createdAt = new Date().toISOString();
      const user = new User({
        name: name,
        username: username,
        profilePicture: profilePicture,
        email: email,
        createdAt: createdAt
      });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
export const getAllUserController = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};