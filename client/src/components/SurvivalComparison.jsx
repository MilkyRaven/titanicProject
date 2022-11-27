import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function SurvivalComparison() {
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

    //console.log(passengers)

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

    console.log(classOneSurvived)
    console.log(classTwoSurvived)
    console.log(classThreeSurvived)

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
    <div>SurvivalComparison
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
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="survived" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}
