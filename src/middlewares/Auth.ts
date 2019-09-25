/**
 * Auth Guard Middleware
 *
 * @author Rishabh Pandey <geekrishabh@gmail.com>
 */

import JwtLib from '../services/JwtLib';

class AuthGuard {
  public static isAuthenticated(token): any {
    const encoded = JwtLib.decode(token);
    if (encoded) {
      return true;
    }
    return false;
  }
}

export default AuthGuard;
