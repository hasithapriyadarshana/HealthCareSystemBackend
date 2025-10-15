const express = require("express"); // Import Express\(Gives access to Express's features, like creating routers and handling HTTP requests.)
const router = express.Router(); // Creates a new router instance using Express's Router middleware.This router will define specific paths for auth actions, which can later be mounted into the main Express app.
const appointmentController = require("../controllers/appointmentController"); // Import the appointment controller from the controllers directory. This controller contains the logic for handling appointment-related operations.
// Create a new appointment
router.post("/appointments", appointmentController.createAppointment); // Handles POST requests to /appointments by invoking the createAppointment method from the appointmentController.
// Get all appointments
router.get("/appointments", appointmentController.getAllAppointments); // Handles GET requests to /appointments by invoking the getAllAppointments method from the appointmentController.
// Get a specific appointment by ID
router.get("/appointments/:id", appointmentController.getAppointmentById); // Handles GET requests to /appointments/:id by invoking the getAppointmentById method from the appointmentController. The :id is a route parameter representing the unique identifier of the appointment.
// Update an appointment by ID
router.put("/appointments/:id", appointmentController.updateAppointment);
// Handles PUT requests to /appointments/:id by invoking the updateAppointment method from the appointmentController. This allows updating details of a specific appointment identified by its ID.
// Delete an appointment by ID
router.delete("/appointments/:id", appointmentController.deleteAppointment); // Handles DELETE requests to /appointments/:id by invoking the deleteAppointment method from the appointmentController. This allows deleting a specific appointment identified by its ID.
module.exports = router; // Export the router instance so it can be used in other parts of the application, typically to be mounted in the main Express app.
