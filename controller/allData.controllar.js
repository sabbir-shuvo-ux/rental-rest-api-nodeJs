const allProducts = require("../model/allData.model");

// CREATE NEW PRODUCTS IN DATABASE
const createNewProduct = async (req, res) => {
      try {
            const { code, name, type, availability, needing_repair, durability, max_durability, mileage, price, minimum_rent_period } = req.body;
            const newProduct = new allProducts({
                  code: code,
                  name: name,
                  type: type,
                  availability: availability,
                  needing_repair: needing_repair,
                  durability: durability,
                  max_durability: max_durability,
                  mileage: mileage,
                  price: price,
                  minimum_rent_period: minimum_rent_period
            });

            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct);

      } catch (err) {
            res.status(500).send({
                  message: err.message
            })
      }

};

// GET ALL DATA FROM DATABASE
const getAllData = async (req, res) => {
      try {
            const allData = await allProducts.find();

            res.status(200).send(allData);
      } catch (err) {
            res.status(500).send({
                  message: err.message
            })
      }

};

// GET SINGLE DATA
const getSingleData = async (req, res) => {
      try {
            const singleData = await allProducts.findOne({ _id: req.params.id });
            res.status(200).send(singleData);
      } catch (err) {
            res.status(500).send({
                  message: err.message
            })
      }
};

// UPDATE DATA
const updateData = async (req, res) => {
      try {
            await allProducts.findByIdAndUpdate(req.params.id, { $set: req.body });

            res.status(200).send({
                  message: "success"
            })
      } catch (err) {
            res.status(500).send({
                  message: err.message
            })

      }
}

module.exports = { createNewProduct, getAllData, getSingleData, updateData }