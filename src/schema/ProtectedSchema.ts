import { buildSchema } from 'graphql';

const protectedSchema = buildSchema(`

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

  type User {
    id: ID
    email: String!
    fullname: String!
    deviceId: String
    gender: String
    website: String
    profile_url: String
  }

  enum CompletedEnum {
    PENDING
    COMPLETED
    IN_PROGRESS
  }

  type Todo {
    id: ID,
    title: String!,
    completed: CompletedEnum
    owner_id: String!
    collaborater_ids: [ID]
  }

  type Query {
    getUsers: [User]
    todo(id: ID!): Todo
    todos: [Todo]
    personalTodos: [Todo]
    allMyTodos: [Todo]
  }

  input TodoInput {
    title: String!
    completed: CompletedEnum 
    owner_id: ID
    collaborater_ids: [ID]
  }

  type Mutation {
    updateProfile(user: UserInfo): User
    createTodo(input: TodoInput!): Todo
    addCollaborater(id: ID!, collaboraterId: ID!): Todo
    removeCollaborater(id: ID!, collaboraterId: ID!): Todo
    updateTodo(id: ID!, input: TodoInput!): Todo
    deleteTodo(id: ID!): Todo
  }
`);

export default protectedSchema;
