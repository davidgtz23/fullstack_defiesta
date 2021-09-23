const express = require('express');
const router = express.Router();


const {
    getProviders,
    createProvider,
    updateProvider,
    deleteProvider
} = require("../controllers/providers");


// Get all providers
router.get("/", getProviders);

// Create a new provider
router.post("/", createProvider);

// Update a provider by id
router.put("/:id", updateProvider);

// Delete a provider by id
router.delete("/:id", deleteProvider);



module.exports = router;