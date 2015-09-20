'use strict';

import express from 'express';
import api from './api';
import middleware from './middlewares';

/**
 * Routes
 */

let router = express.Router();
router.use(middleware.timeLog);
router.route('/users')
  .post(api.create)
  .get(api.list);

/**
 * Expose
 */

export default { api, middleware, router };
