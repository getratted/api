'use strict';

/**
 * Time log
 */

function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
}

/**
 * Expose
 */

export default { timeLog };
