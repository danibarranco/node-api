const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
module.exports = mongoose.model('storage', StorageScheme)
