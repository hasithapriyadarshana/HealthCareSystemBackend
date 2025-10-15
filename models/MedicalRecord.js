//creating medical record model
import mongoose from "mongoose"; //Imports the Mongoose library. Mongoose handles schema definition, 
// validation, querying, and middleware for MongoDB.
const medicalRecordSchema = mongoose.Schema(
  {
    //defining a new Mongoose schema using mongoose.Schema(). A schema acts like a blueprint for documents in a MongoDB collection.     
    patientId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true, //Reference to the Patient model. Must be a valid ObjectId and is mandatory.

    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true, //Reference to the Doctor model. Must be a valid ObjectId and is mandatory.
    },
    diagnosis: {
        type: String,
        required: true, //Diagnosis details. Must be a string and is mandatory.
    },
    treatment: {
        type: String,
        required: true, //Treatment details. Must be a string and is mandatory.
    },
    prescriptions: {
        type: [String],
        required: true, //Array of prescribed medications. Must be an array of strings and is mandatory.

    },
    visitDate: {
        type: Date,
        required: true, //Date of the medical visit. Must be a valid date and is mandatory.
    },
    notes: {
        type: String,
        default: "", //Optional additional notes. Not required, so it can be omitted or empty.
    },
    },
    {
    timestamps: true,
    //Automatically adds createdAt and updatedAt fields to track when documents are created/modified.
    createdAt : "created_at",
    updatedAt : "updated_at"
    }
);
const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema); // Create the MedicalRecord model
export default MedicalRecord; //export the model for use in other parts of the application  