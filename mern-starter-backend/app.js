const express = require("express");
const app = express();
const port = process.env.PORT || 8082;

const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const books = require("./routes/api/books");

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

app.use('/api/books', books);

app.listen(port, () => console.log(`Server running on port ${port}`));
