import User from '../models/User';
import UserController from '../controllers/user';

const userResolvers = {
  // Logging In A User
  login: UserController.login,
  // Store Details Of New User
  signUp: UserController.register,
  // Update User's Profilexw
  updateProfile: UserController.update
};

export default userResolvers;
