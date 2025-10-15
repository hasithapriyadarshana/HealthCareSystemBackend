//creating patient model
import mongoose from "mongoose"; //Imports the Mongoose library. Mongoose handles schema definition, validation, querying, and middleware for MongoDB.
const patientSchema = mongoose.Schema(
  {
    //defining a new Mongoose schema using mongoose.Schema(). A schema acts like a blueprint for documents in a MongoDB collection.
    name: {
      type: String,
      required: true, //Patient's full name. Must be a string and is mandatory.
    },
    email: {
      type: String,
      required: true,
      unique: true, //Email address. Mandatory and unique across all patients
    },
    password: {
      type: String,
      required: true, //Hashed password (in a real app, you'd hash this with bcrypt before saving)
    },
    age: {
      type: Number,
      required: true, //Patient's age. Must be a number (e.g., 45) and mandatory.
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"], //Gender. Mandatory string, restricted to one of the three enum values (validation will fail otherwise).
    },
    address: {
      type: String,
      required: true, //Home address. Mandatory string.
    },
    phone: {
      type: String,
      required: true,
      unique: true, //Phone number. Mandatory and unique (e.g., for contact verification).
    },
    medicalHistory: {
      type: String,
      default: "", //Optional medical history notes. No required, so it can be omitted or empty.
    },
  },
  {
    timestamps: true,
    //Automatically adds createdAt and updatedAt fields to track when documents are created/modified.
    createdAt : "created_at",
    updatedAt : "updated_at"
  }
);
const Patient = mongoose.model("Patient", patientSchema); // Create the Patient model
export default Patient; //

/*Security Note: Storing passwords in plain text is insecure—always hash them (e.g., using pre('save') middleware with bcrypt). 
Emails and phones being unique help prevent duplicate accounts.*/
