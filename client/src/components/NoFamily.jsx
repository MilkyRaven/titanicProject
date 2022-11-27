import '../App.css';
import React, { useEffect, useState } from 'react'

export default function NoFamily() {


    const [passengers, setPassengers] = useState([{}]);

    const getPassengers = async () => {
        try {
            const res = await fetch("http://localhost:5000/passengers/children/died/nofamily");
            const dataJson = await res.json();

            setPassengers(dataJson);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPassengers();
    }, []);


    return (
        <div>No Family
            {passengers.map((children, index) => {
                return <div key={index}>
                    <p>Name: {children.name}</p>
                    <p>Age: {children.age}</p>
                    <p>Class: {children.pclass}</p>
                </div>
            })}
        </div>
    )
}
