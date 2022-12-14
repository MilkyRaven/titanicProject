import '../App.css';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useEffect, useState } from 'react';

export default function AllChildren() {

    const [passengers, setPassengers] = useState([{}]);

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

    //filtering the data

    const survivedTrue = []
    const survivedFalse = [];
    const allChildrenNumber = passengers.length;

    passengers.forEach((children) => {
        if (children.survived === false) {
            return survivedFalse.push(children);
        } else if (children.survived === true) {
            return survivedTrue.push(children);
        }
    })

    //preparing percentages to use with the piechart
    const percentageSurvived = Math.round((survivedTrue.length / allChildrenNumber) * 100);
    const percentageDied = Math.round((survivedFalse.length / allChildrenNumber) * 100);

    //piechart

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const data = [
        { name: '% of children that survived', value: percentageSurvived },
        { name: '% of children that died', value: percentageDied }
    ];

    return (
        <div className='firstPie'>
            <div className='firstPie-text'>
                <p><strong>Total number of children</strong> {allChildrenNumber}</p>
                <p> <strong id='colorBlue'>Survived</strong>: {survivedTrue.length} </p>
                <p><strong id='colorGreen'>Died</strong>: {survivedFalse.length} </p>
            </div>
            <PieChart width={800} height={400}>
                <Pie
                    data={data}
                    cx={400}
                    cy={290}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}
