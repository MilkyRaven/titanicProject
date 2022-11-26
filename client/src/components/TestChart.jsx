import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';



export default function TestChart() {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2200, amt: 2100}];
  return (
    <div>
        <h2>TestChart</h2>
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    </LineChart>
    </div>
  )
}
