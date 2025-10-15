//creating department model
import mongoose from "mongoose"; //Imports the Mongoose library. Mongoose handles schema definition, 
// validation, querying, and middleware for MongoDB.
const departmentSchema = mongoose.Schema(
  {
    //defining a new Mongoose schema using mongoose.Schema(). A schema acts like a blueprint for documents in a MongoDB collection. 
    name: {
      type: String,
      required: true, //Department name (e.g., "Cardiology"). Must be a string and is mandatory.
        unique: true, //Department name must be unique across all departments.
    },
    head: {
        type: String,   
        required: true, //Name of the department head. Mandatory string.
    },
    location: {
        type: String,
        required: true, //Location of the department within the hospital (e.g., "Building A, Floor 2"). Mandatory string.
    },
    contactNumber: {
        type: String,

        required: true,
        unique: true, //Contact phone number for the department. Mandatory and unique (e.g., for inquiries).
    },
    servicesOffered: {
        type: [String],
        required: true, //Array of services offered by the department (e.g., ["ECG", "Stress Test"]). Mandatory array of strings.
    },
    operatingHours: {
        type: String,
        required: true, //Operating hours of the department (e.g., "9am - 5pm"). Mandatory string.
    },
    },
    {
    timestamps: true,
    //Automatically adds createdAt and updatedAt fields to track when documents are created/modified.
    createdAt : "created_at",   
    updatedAt : "updated_at"
    }
);
const Department = mongoose.model("Department", departmentSchema); // Create the Department model
export default Department; //export the model for use in other parts of the application