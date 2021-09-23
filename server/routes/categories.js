const express = require('express');
const router = express.Router();


const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/Categories");

// Get all Categories
router.get("/", getCategories);

// Create a new Category
router.post("/", createCategory);

// Update a Category by id
router.put("/:id", updateCategory);

// Delete a Category by id
router.delete("/:id", deleteCategory);



module.exports = router;