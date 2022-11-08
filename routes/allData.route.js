const router = require("express").Router();
const { createNewProduct, getAllData, getSingleData, updateData } = require("../controller/allData.controllar");
const allProducts = require("../model/allData.model")

// POST NEW PRODUCTS
router.post("/", createNewProduct);

// GET ALL PRODUCTS
router.get("/", getAllData);

// GET SINGLE DATA
router.get("/:id", getSingleData);

// UPDATE DATA
router.put("/:id", updateData);


module.exports = router;