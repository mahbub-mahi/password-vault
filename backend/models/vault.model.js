const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaultSchema = new Schema(
  {
    Id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    valutname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    type: {
      type: String,
    },
    url: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Vault", vaultSchema);

module.exports = User;
