require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")
const MONGODB_URI = process.env.MONGODB_URI; 
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes)

mongoose.connect(MONGODB_URI)
.then(() => console.log("connected to mongo db"))
.catch((err)=> console.error("could not connect to mongoDb",err));

app.get("/", (req,res) => {
    res.send("Backend server is running");
});

app.listen(PORT, () => {
    console.log(`server is listening TO ${PORT}`);
})
