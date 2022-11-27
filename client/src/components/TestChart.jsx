import React, {useEffect, useState} from 'react'
import { PieChart, Pie, Cell} from 'recharts';


export default function TestChart() {
  const [data, setData] = useState([{}]);
  
  const getPassengers = async() => {
    try {
        const res = await fetch("http://localhost:5000/passengers/class1/survived");
        const dataJson = await res.json();
        console.log(dataJson);

        setData(dataJson);
        
    } catch (error) {
        console.log(error)            
    }
}

useEffect(()=> {
    getPassengers(); 
}, []);
//console.log(data)


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="age"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
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
  )
}
