import '../App.css';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function ChildrenByClass() {

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

    //filtering children by class

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

    //piechart with the data

    const data = [
        { name: 'First Class', value: classOne.length },
        { name: 'Second Class', value: classTwo.length },
        { name: 'Third Class', value: classThree.length },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <div className='byClass-data'>
                <table className='byClass-table'>
                    <tbody>
                        <tr>
                            <td>Number of children in <strong>first class</strong></td>
                            <td>Number of children in <strong>second class</strong></td>
                            <td>Number of children in <strong>third class</strong></td>
                        </tr>
                        <tr>
                            <td id='class1'>{classOne.length}</td>
                            <td id='class2'>{classTwo.length}</td>
                            <td id='class3'>{classThree.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PieChart className='pie' width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
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
