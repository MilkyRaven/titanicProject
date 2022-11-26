import React, {useEffect, useState} from 'react'

export default function AllPassengers() {

    const [passengers, setPassengers] = useState([{}]);

    const getPassengers = async() => {
        try {
            const res = await fetch("http://localhost:5000/passengers");
            const dataJson = await res.json();
            //console.log(dataJson);

            setPassengers(dataJson);
            
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(()=> {
        getPassengers(); 
    }, []);

    console.log(passengers);

  return (
    <div>
        <h1>All passengers</h1>
        {passengers.map((passenger)=> {
            return <p>{passenger.name}</p>
        })}
    </div>
    
  )
}