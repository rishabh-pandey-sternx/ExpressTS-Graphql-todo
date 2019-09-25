import userResolvers from './User';

// Resolver That Can Be Publicly Accessed
const publicUserResolvers = {
  login: userResolvers.login,
  signUp: userResolvers.signUp
};

export default publicUserResolvers;
