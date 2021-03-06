const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/item_controller');

const router = express.Router();

router
  .post('/', createData)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);

module.exports = router;
