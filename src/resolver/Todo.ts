import JwtLib from '../services/JwtLib';
import AuthGuard from '../middlewares/Auth';
import TodoController from '../controllers/Todo';

const authenticated = next => (root, args, context, info) => {
  if (!args.headers.authorization) {
    throw new Error(`Unauthenticated!`);
  }

  const token = JwtLib.tokenFromHeaders(args);
  const decode = JwtLib.decode(token);

  if (!decode) {
    throw new Error(`Unauthenticated!`);
  }
  return next(decode);
};

const todoResolvers = {
  // Retrieve A Particular Task
  todo: TodoController.getOne,
  // Get All Tasks
  todos: TodoController.getAll,
  // Get Tasks Created By User
  personalTodos: authenticated(decode => {
    return TodoController.getMine(decode);
  }),
  // Get Tasks Collaborated By User
  allMyTodos: authenticated(decode => {
    return TodoController.getAllMine(decode);
  }),
  // Create A New Task
  createTodo: TodoController.create,
  // Update Existing Task
  updateTodo: TodoController.update,
  // Add Collaborater To The Task
  addCollaborater: TodoController.addUser,
  // Delete Collaborater From The Task
  removeCollaborater: TodoController.removeUser,
  // Delete A Particular Task
  deleteTodo: TodoController.delete
};

export default todoResolvers;
