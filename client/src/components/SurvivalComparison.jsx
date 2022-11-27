import '../App.css';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function SurvivalComparison() {
    const [passengers, setPassengers] = useState([{}]);

    //first, calling the database
    const getPassengers = async () => {
        try {
            const res = await fetch("http://localhost:5000/passengers/children");
            const dataJson = await res.json();

            setPassengers(dataJson);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPassengers();
    }, []);

    //second, filtering the data:
    // ---> children by their class

    const classOne = [];
    const classTwo = [];
    const classThree = [];

    passengers.forEach((children) => {
        if (children.pclass === 1) {
            return classOne.push(children);
        } else if (children.pclass === 2) {
            return classTwo.push(children);
        } else if (children.pclass === 3) {
            return classThree.push(children)
        }
    })

    // ---> children by their class that survived

    const classOneSurvived = [];
    const classTwoSurvived = [];
    const classThreeSurvived = [];

    passengers.forEach((children) => {
        if (children.pclass === 1 && children.survived === true) {
            return classOneSurvived.push(children);
        } else if (children.pclass === 2 && children.survived === true) {
            return classTwoSurvived.push(children);
        } else if (children.pclass === 3 && children.survived === true) {
            return classThreeSurvived.push(children)
        }
    })

    const data = [
        {
            name: 'First Class',
            survived: classOneSurvived.length,
            total: classOne.length,
            amt: passengers.length,
        },
        {
            name: 'Second Class',
            survived: classTwoSurvived.length,
            total: classTwo.length,
            amt: passengers.length,
        },
        {
            name: 'Third Class',
            survived: classThreeSurvived.length,
            total: classThree.length,
            amt: passengers.length,
        }
    ];

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#0088fe" />
                <Bar dataKey="survived" fill="#00C49F" />
            </BarChart>
        </div>
    )
}
