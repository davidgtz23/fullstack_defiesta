const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/Users");


// Get all Users
router.get("/", getUsers);

// Create a new User
router.post("/", createUser);

// Update a User by id
router.put("/:id", updateUser);

// Delete a User by id
router.delete("/:id", deleteUser);



module.exports = router;