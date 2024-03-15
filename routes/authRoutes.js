const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const authenticateToken = require("../middleware/authenticateToken");
router.post("/register" , authController.register);
router.post("/login", authController.login);
router.get("/getsomeData",authenticateToken,authController.someData);


module.exports = router;