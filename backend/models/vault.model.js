const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaultSchema = new Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: false,
    },
    vaultname: {
      type: String,
      unique: false,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      unique: false,
    },
    url: {
      type: String,
      unique: false,
    },
    notes: {
      type: String,
      unique: false,
    },
    isDeleted: {
      type: Boolean,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Vault", vaultSchema);

module.exports = User;
