//creating appointment model
import mongoose from "mongoose"; //Imports the Mongoose library. Mongoose handles schema definition, 
// validation, querying, and middleware for MongoDB.
const appointmentSchema = mongoose.Schema(
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
        appointmentDate: {
            type: Date,
            required: true, //Date and time of the appointment. Must be a valid date and is mandatory.      
        },
        reason: {
            type: String,
            required: true, //Reason for the appointment. Must be a string and is mandatory.
        },
        status: {   
            type: String,
            enum: ["Scheduled", "Completed", "Cancelled"],
            default: "Scheduled", //Status of the appointment. Must be one of the three enum values. Defaults to "Scheduled".
        },
    },
    {
        timestamps: true,
        //Automatically adds createdAt and updatedAt fields to track when documents are created/modified.
        createdAt : "created_at",
        updatedAt : "updated_at"
    }
);
const Appointment = mongoose.model("Appointment", appointmentSchema); // Create the Appointment model
export default Appointment; //export the model for use in other parts of the application    
