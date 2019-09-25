import { Tokens } from './../interfaces/models/user';
/**
 * Define the Todo API logic
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import { request } from 'https';

import Todo from '../models/Todo';
import userController from './user';
import { response } from 'express';

class TodoController {
  /**
   * Create A New Task
   * @param req
   * @returns {any}
   */

  public static create(req, res): any {
    return Todo.create(req.input)
      .then(todo => {
        return todo;
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Update Existing Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static update(req, res): any {
    return Todo.findByIdAndUpdate(req.id, req.input)
      .then(todo => {
        return todo;
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Update Existing Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static delete(req, res): any {
    return Todo.findByIdAndRemove({ _id: req.id })
      .then(todo => {
        return todo;
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Get All Tasks
   * @param req
   * @returns {any}
   */

  public static getAll(): any {
    return Todo.find()
      .then(todos => {
        return todos;
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Get One Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static getOne(req, res): any {
    return Todo.findById(req.id)
      .then(todo => {
        return todo;
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Get User's Owned Tasks
   * @param req
   * @returns {any}
   */

  public static getMine(user): any {
    return Todo.find({ owner_id: user.id }, (err, todos) => {
      if (err) {
        return null;
      }
      return todos;
    });
  }

  /**
   * Get User's Colloborated Tasks
   * @param req
   * @returns {any}
   */

  public static getAllMine(user): any {
    return Todo.find({ collaborater_ids: user.id }, (err, todos) => {
      if (err) {
        return null;
      }
      return todos;
    });
  }

  /**
   * Add User As Collaborater in A Task
   * @param req
   * @returns {any}
   */

  public static addUser(req, res): any {
    return Todo.findByIdAndUpdate(
      req.id,
      { $push: { collaborater_ids: req.collaboraterId } },
      (err, todo) => {
        if (err) {
          return null;
        }

        return todo;
      }
    );
  }

  /**
   * Remove User From A Colloborated Tasks
   * @param req
   * @returns {any}
   */

  public static async removeUser(req, res): Promise<any> {
    return Todo.findByIdAndUpdate(
      req.id,
      { $pull: { collaborater_ids: req.collaboraterId } },
      (err, todo) => {
        if (err) {
          return null;
        }
        return todo;
      }
    );
  }
}

export default TodoController;
