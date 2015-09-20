'use strict';

/**
 * list
 */

function list (req, res) {
  res.json([{ name: 'John doe' }]);
}

/**
 * Expose
 */

export default { list };
