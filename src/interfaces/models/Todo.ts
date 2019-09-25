/**
 * Define interface for Todo Model
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

export enum Completed {
  Active = 'Active',
  InActive = 'InActive'
}

export interface ITodo {
  title: string;
  completed: Completed;
  user_id: string;
}

export default ITodo;
