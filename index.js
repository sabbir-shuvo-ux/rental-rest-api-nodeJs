const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const allData = require("./routes/allData.route");

dotenv.config();

// DATABASE CONNECTION
const dbConnection = async () => {
      try {
            await mongoose.connect('mongodb+srv://rental:rental@cluster0.5fqfaem.mongodb.net/rental?retryWrites=true&w=majority');
            console.log("DB Connected +1+")
      } catch (err) {
            console.log(err.message)
      }
}

// MIDDLE-WAREs
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

// ROUTES
app.use("/api/alldata", allData)

app.listen(process.env.PORT || 8800, async () => {
      console.log("Server is running");
      await dbConnection();
})