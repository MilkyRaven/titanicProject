import React, {useEffect, useState} from 'react'

export default function AllPassengers() {

    const getPassengers = async() => {
        try {
            const res = await fetch("http://localhost:5000/passengers");
            const dataJson = await res.json();
            console.log(dataJson);
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(()=> {
        getPassengers(); 
    })
  return (
    <div>AllPassengers</div>
  )
}
