## List of Queries & Mutation Available

### Public

- Mutation
  • Login

```js
mutation loginuser{
  login(email:"geekrishabh@gmail.com", password:"Secret@123456"){
    email
    token
  }
}
```

• SignUp

```js
mutation createUser{
  signUp(user:{email:"geekrishabh@gmail.com", password:"Secret@123456", fullname:"Rishabh Pandey"}){
    token
    email
  }
}
```

### Protected

- Query

  • getUsers: [User]
  • todo(id: ID!): Todo
  • todos: [Todo]
  • personalTodos: [Todo]
  • allMyTodos: [Todo]

- Mutation

  • updateProfile(user: UserInfo): User
  • createTodo(input: TodoInput!): Todo
  • addCollaborater(id: ID!collaboraterId: ID!): Todo
  • removeCollaborater(id: ID!collaboraterId: ID!): Todo
  • updateTodo(id: ID!input: TodoInput!): Todo
  • deleteTodo(id: ID!): Todo
