'use strict';

/**
 * list
 */

function list (req, res) {
  res.json([{ name: 'John doe' }]);
}

/**
 * create
 */

function create (req, res) {
  res.status(201).send();
}

/**
 * Expose
 */

export default {
  list,
  create
};
