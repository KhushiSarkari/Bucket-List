'use strict';

const Item = require('../models/item_schema');

const createData = (req, res) => {
  Item.create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err);
      } else {
        res.status(500).json(err);
      }
    });
};

const readData = (req, res) => {
  Item.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateData = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res) => {
  Item.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error('Item not available');
      }
      return data.remove();
    })
    .then((data) => {
      console.log('Item removed!');
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
};
