const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.DB_URI || "mongodb://localhost/warframe-calculator";
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
