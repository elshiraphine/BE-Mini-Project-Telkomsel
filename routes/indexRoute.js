//require controllers
const indexController = require("../controllers/index");
const express = require("express");
const router = express.Router();

router.post("/calculate", (req, res) => {
    try {
        const { alas_segitiga, tinggi_segitiga } = req.body;
        const luas_segitiga = (alas_segitiga * tinggi_segitiga) / 2;
        res.render("index", { luas_segitiga });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
