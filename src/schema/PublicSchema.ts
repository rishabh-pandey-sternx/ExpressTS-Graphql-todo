import { buildSchema } from 'graphql';

const publicSchema = buildSchema(`

  input UserInfo {
    id: ID
    password: String!
    email: String!
    fullname: String!
    deviceId: String
    gender: String
    website: String
    profile_url: String
  }

  type SingUpResult {
    email: String!
    fullname: String!
    deviceId: String
    gender: String
    website: String
    profile_url: String
    token: String!
  }

  type LoginResult {
      email: String!
      fullname: String!
      deviceId: String
      gender: String
      website: String
      profile_url: String
      token: String
  }

  type Query {
    dummy: String
  }

  type Mutation {
    signUp(user: UserInfo): SingUpResult
    login(email: String!, password: String!): LoginResult
  }
`);

export default publicSchema;
