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
        <div>
            {passengers.map((children, index) => {
                return <div key={index}>
                    <table className='noFamily-table'>
                        <tbody>
                            <tr className='table-section'>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Passenger Class</td>
                                <td>Ticket</td>
                            </tr>
                            <tr>
                                <td>{children.name}</td>
                                <td>{children.age}</td>
                                <td>{children.pclass}</td>
                                <td>{children.ticket}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            })}
        </div>
    )
}
