/**
 * Define Todo model
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import { ITodo } from '../interfaces/models/Todo';
import mongoose from '../providers/Database';

const Schema = mongoose.Schema;
// Define the Todo Schema
export const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: String,
      enum: ['PENDING', 'COMPLETED', 'IN_PROGRESS'],
      required: true
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    collaborater_ids: {
      type: [Schema.Types.ObjectId],
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
