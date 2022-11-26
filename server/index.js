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

//get all first class children female passengers
app.get("/passengers/children/class1", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE age < 12 AND pclass = 1");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get all first class children female passengers
app.get("/passengers/children/class2", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE age < 12 AND pclass = 2");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get all third class children female passengers
app.get("/passengers/children/class3", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE age < 12 AND pclass = 3");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get all children that survived
app.get("/passengers/children/survived", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE age < 12 AND survived = true");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000! 🐼 ")
});