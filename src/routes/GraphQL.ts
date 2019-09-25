import { Router } from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as expressJwt from 'express-jwt';

import protectedSchema from '../schema/ProtectedSchema';
import publicResolvers from '../resolver/PublicResolver';
import protectedResolvers from '../resolver/ProtectedResolver';
import Locals from '../providers/Locals';
import publicSchema from '../schema/PublicSchema';

const router = Router();

// Public Routes
router.use(
  '/public',
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: publicSchema,
    rootValue: publicResolvers,
    graphiql: true,
    customFormatErrorFn: error => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    })
  }))
);

// Protected Routes
router.use(
  '/protected',
  expressJwt({ secret: Locals.config().appSecret }),
  graphqlHTTP((request, response, graphQLParams) => ({
    schema: protectedSchema,
    rootValue: protectedResolvers,
    graphiql: true,
    customFormatErrorFn: error => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    })
  }))
);

export default router;
