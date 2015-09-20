'use strict';

import express from 'express';
import mongoose, { connection as db } from 'mongoose';
import users from './lib/users';
import config from './config';

let app = express();
let port = process.env.PORT || 3000;

db.on('error', console.log);
db.on('disconnected', connect);
db.once('open', listen);
connect();

/**
 * Use modules
 */

app.use(users.router);

/**
 * Listen
 */

function listen () {
  app.listen(port);
  console.log('Express app started on port', port);
}

/**
 * Connect
 */

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
}
