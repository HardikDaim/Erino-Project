const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoute = require("./routes/contactRoute");

dotenv.config(); 

connectDB(); // db connection

const app = express();

// middlewares
app.use(express.json()); 
app.use(cors());  


app.use("/api/contacts", contactRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
