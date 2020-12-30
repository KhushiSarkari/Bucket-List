const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    status: {
      type: String,
      required: true,
      default: 'active',
      enum: ['active', 'completed']
    },
    notes: String,
  },
  { timestamps: true },
);

module.exports = model('item', itemSchema);
