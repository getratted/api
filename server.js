'use strict';

import express from 'express';
import users from './lib/users';

let app = express();
let port = process.env.PORT || 3000;

/**
 * Use modules
 */

app.use(users.router);

/**
 * Listen
 */

app.listen(port);
console.log('Express app started on port', port);
