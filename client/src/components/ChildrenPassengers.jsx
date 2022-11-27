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
            <h2>All Children Passengers</h2>
            <h3>(Ordered by age, in descendant order)</h3>
            <table className='allChildren-table'>
                <tbody>
                    <tr className='table-section'>
                        <td>Name</td>
                        <td>Genre</td>
                        <td>Age</td>
                        <td>Survived?</td>
                        <td>Home/Destination</td>
                    </tr>
                    {passengers.map((passenger, index) => {
                        return <tr key={index}>
                            <td>{passenger.name}</td>
                            <td>{passenger.sex}</td>
                            <td>{passenger.age}</td>
                            <td>{passenger.survived? "yes" : "no"}</td>
                            <td>{passenger.home_dest}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}
