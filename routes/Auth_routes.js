const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const userControllers = require("../controllers/UserController/UserControllers");
router.get("/", userControllers.getAllUsers);
router.post("/login/", userControllers.getuserById);


module.exports = router;
