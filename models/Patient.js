//creating patient model
import mongoose from "mongoose";
const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    medicalHistory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Patient = mongoose.model("Patient", patientSchema);
export default Patient;

// models/Patient.js
const mongoose = require("mongoose");
/*
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  address: { type: String },
});

module.exports = mongoose.model('Patient', patientSchema);*/
