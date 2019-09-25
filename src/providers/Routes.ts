/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';

import apiRouter from './../routes/Api';
import graphQLRouter from './../routes/GraphQL';

class Routes {
  public mountApi(_express: Application): Application {
    const apiPrefix = Locals.config().apiPrefix;
    Log.info('Routes :: Mounting API Routes...');

    return _express.use(`/${apiPrefix}`, apiRouter);
  }

  public mountGraphQL(_express: Application): Application {
    return _express.use(`/graphql`, graphQLRouter);
  }
}

export default new Routes();
