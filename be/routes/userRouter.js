const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/userControllers.js"); 

  
// ROUTES

// GET /tours
router.get("/", getAllUsers);

// POST /tours
router.post("/", auth, createUser);

// GET /tours/:tourId
router.get("/:userId", auth, getUserById);

// PUT /tours/:tourId
router.put("/:userId", auth, updateUser);

// DELETE /tours/:tourId
router.delete("/:userId", auth, deleteUser);

module.exports = router;