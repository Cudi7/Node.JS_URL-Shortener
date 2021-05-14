import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  idLink: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Url', urlSchema);
