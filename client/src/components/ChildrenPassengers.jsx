import '../App.css';
import React, { useEffect, useState } from 'react'

export default function ChildrenPassengers() {

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

    return (
        <div>
            <h1>All Children Passengers</h1>
            <p>Number of children passengers: {passengers.length}</p>
            {passengers.map((passenger, index) => {
                return <p key={index}>{passenger.name}, age: {passenger.age}</p>
            })}
        </div>

    )
}
