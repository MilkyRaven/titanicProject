const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());


//ROUTES SECTION //

//passengers under 12 years old 
app.get("/passengers/children", async (req, res) => {
    try {
        const passengers = await pool.query("SELECT * FROM passengers WHERE age < 12 ORDER BY age DESC");
        res.json(passengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//find all children that traveled without family and died
app.get("/passengers/children/died/nofamily", async (req, res) => {
    try {
        const passengers = await pool.query("SELECT * FROM passengers WHERE age < 12 AND survived = false AND parch = 0 AND sibsp = 0 ");
        res.json(passengers.rows);
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000! 🐼 ")
});