const express = require('express'); // Import Express(Gives access to Express's features, like creating routers and handling HTTP requests.)
const router = express.Router();// Creates a new router instance using Express's Router middleware.This router will define specific paths for auth actions, which can later be mounted into the main Express app.
const authController = require('../controllers/authController');// Import the authentication controller from the controllers directory. This controller contains the logic for handling registration, login, and logout operations.

// Register a new user
router.post('/register', authController.registerUser); // Handles POST requests to /register by invoking the registerUser method from the authController.

// Login
router.post('/login', authController.loginUser);// Handles POST requests to /login by invoking the loginUser method from the authController.

// Logout (optional)
router.post('/logout', authController.logoutUser);// Handles POST requests to /logout by invoking the logoutUser method from the authController. This is optional and may not be implemented in all applications.

module.exports = router;