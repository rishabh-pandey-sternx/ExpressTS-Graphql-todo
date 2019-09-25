import { merge } from 'lodash';
import todoResolvers from './Todo';
import userResolvers from './User';

const protectedUserResolvers = {
  updateProfile: userResolvers.updateProfile
};

// Resolvers That Need Authentication Before Access
const protectedResolvers = merge(todoResolvers, protectedUserResolvers);

export default protectedResolvers;
