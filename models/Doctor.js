//creating doctor model
import mongoose from "mongoose"; //Imports the Mongoose library. Mongoose handles schema definition, 
// validation, querying, and middleware for MongoDB.
const doctorSchema = mongoose.Schema(
  {
    //defining a new Mongoose schema using mongoose.Schema(). A schema acts like a blueprint for documents in a MongoDB collection. 
    name: {
      type: String,
      required: true, //Doctor's full name. Must be a string and is mandatory.
    },
    email: {
      type: String,
        required: true,
        unique: true, //Email address. Mandatory and unique across all doctors.
    },
    password: {
        type: String,
        required: true, //Hashed password (in a real app, you'd hash this with bcrypt before saving).
    },
    specialization: {
        type: String,

        required: true, //Doctor's area of specialization (e.g., "Cardiology"). Mandatory string.
    },
    phone: {
        type: String,
        required: true,
        unique: true, //Phone number. Mandatory and unique (e.g., for contact verification).
    },
    yearsOfExperience: {
        type: Number,
        required: true, //Number of years the doctor has been practicing. Must be a number (e.g., 10) and mandatory.
    },
    clinicAddress: {
        type: String,

        required: true, //Address of the clinic/hospital where the doctor practices. Mandatory string.
    },
    availableTimings: {
        type: String,
        required: true, //Doctor's available timings (e.g., "9am - 5pm"). Mandatory string.
    },
  },
  {
    timestamps: true,
    //Automatically adds createdAt and updatedAt fields to track when documents are created/modified.
    createdAt : "created_at",
    updatedAt : "updated_at"
  }
);
const Doctor = mongoose.model("Doctor", doctorSchema); // Create the Doctor model
export default Doctor; //export the model for use in other parts of the application