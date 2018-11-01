const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const tradeSchema = new mongoose.Schema({
  id: {
    type: Number,
    uniq: true,
    required: 'You must supply id!',
  },
  type: {
    type: String,
    default: 'buy',
  },
  user: {
    id: {
      type: Number,
      uniq: true,
      required: 'You must supply id!',
    },
    name: {
      type: String,
      trim: true,
      required: 'You must supply a name!',
    },
  },
  symbol: {
    type: String,
    trim: true,
    required: 'You must supply a symbol!',
  },
  shares: {
    type: Number,
    min: 0,
    default: 0,
  },
  price: {
    type: Number,
    min: 130.42,
    max: 195.65,
    required: 'You must supply price!',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// function autopopulate(next) {
//   this.populate('user');
//   next();
// }

// tradeSchema.pre('find', autopopulate);
// tradeSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('trade', tradeSchema);
