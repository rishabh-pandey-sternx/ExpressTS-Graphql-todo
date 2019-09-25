/**
 * Define the User API logic
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import User from '../models/User';
import * as bcrypt from 'bcrypt';
import jwtLib from '../services/JwtLib';

class UserController {
  /**
   * Store The Details Of First Time User
   * @param req
   * @returns {any}
   */

  public static register(req, res): any {
    let response: any = {};

    return User.findOne({
      email: req.user.email
    })
      .then(user => {
        const newUser = new User({
          email: req.user.email,
          password: req.user.password,
          fullname: req.user.fullname || null,
          deviceId: req.user.deviceId || null,
          gender: req.user.gender || null,
          website: req.user.website || null,
          profile_url: req.user.profile_url || null
        });

        if (user) {
          response.msg = 'Account with the e-mail address already exists.';
          return response;
        }

        return newUser.save().then(result => {
          // response.email = req.user.email;
          const token = jwtLib.signIn(
            req.user.email,
            req.user.password,
            result.id
          );
          response = { token, password: null, ...result._doc };
          return response;
        });
      })
      .catch(err => {
        return err;
      });
  }

  /**
   * Logging in Of A Registerd User
   * @param req
   * @returns {Promise<*>}
   */

  public static async login(req): Promise<any> {
    let response: any = {};

    try {
      const user = await User.findOne({ email: req.email });
      if (!user) throw new Error('Email does not exist');
      const passwordIsValid = await bcrypt.compareSync(
        req.password,
        user.password
      );
      if (!passwordIsValid) throw new Error('Password incorrect');
      const token = jwtLib.signIn(user.email, req.password, user.id);
      response = { token, password: null, ...user._doc };
      return response;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get User By Id
   * @param req
   * @returns {Promise<*>}
   */

  public static async getUserById(id): Promise<any> {
    try {
      const result = await User.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Reset Password
   * @param req
   * @returns {any}
   */

  public static resetPassword(req, res): any {}

  /**
   * Change Password
   * @param req
   * @returns {any}
   */

  public static changePassword(req, res): any {}

  /**
   * Update The Details Of User
   * @param req
   * @returns {any}
   */
  public static update(req, res): any {}
}

export default UserController;
