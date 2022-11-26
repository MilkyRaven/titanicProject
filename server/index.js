const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); //may not need this

//ROUTES SECTION //

//get all passengers names
app.get("/passengers", async (req, res) => {
    try {
        const allPassengers = await pool.query("SELECT * FROM passengers");
        res.json(allPassengers.rows);
    } catch (error) {
        console.log(error)
    }
})



app.listen(5000, () => {
    console.log("server has started on port 5000! 🐼 ")
});