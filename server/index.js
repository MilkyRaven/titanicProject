const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES SECTION //

//get all passengers
app.get("/passengers", async (req, res) => {
    try {
        const allPassengers = await pool.query("SELECT * FROM passengers");
        res.json(allPassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get all first class female passengers
app.get("/passengers/female/class1", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE sex LIKE 'female' AND pclass = 1");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get number of all first class female passengers
app.get("/passengers/female/class1/amount", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT COUNT (*) FROM passengers WHERE sex LIKE 'female' AND pclass = 1");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get all first class female passengers that survived
app.get("/passengers/female/class1/survived", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT * FROM passengers WHERE sex LIKE 'female' AND pclass = 1 AND survived = true");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get number of all first class female passengers that survived
app.get("/passengers/female/class1/survived/amount", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT COUNT (*) FROM passengers WHERE sex LIKE 'female' AND pclass = 1 AND survived = true");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get average age of first class females that survived
app.get("/passengers/female/class1/survived/avg", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT AVG(age) FROM passengers WHERE sex LIKE 'female' AND pclass = 1 AND survived = true");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})

//get age of oldest female that survived (any class)
app.get("/passengers/female/survived/oldest", async (req, res) => {
    try {
        const femalePassengers = await pool.query("SELECT MAX(age) FROM passengers WHERE sex LIKE 'female' AND survived = true");
        res.json(femalePassengers.rows);
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000! 🐼 ")
});