import '../App.css';
import React from 'react'
import '../App.css';
import AllChildren from './AllChildren';

export default function Intro() {
  return (
    <div>
      <h1> The Children at Titanic</h1>
      <div>
        <div className='intro-text'>
          <img id='titanic-img' alt="The Titanic Ship" width={500} src='https://cdn.britannica.com/79/4679-050-BC127236/Titanic.jpg'></img>
          <p className='paragraph'>Titanic, British luxury passenger liner that sank on April 15, 1912, en route to New York from Southampton, England, on its maiden voyage. The largest and most luxurious ship afloat, the Titanic had a double-bottomed hull divided into 16 watertight compartments. Because four of these could be flooded without endangering its buoyancy, it was considered unsinkable. Shortly before midnight on April 14, it collided with an iceberg southeast of Cape Race, Newfoundland; five compartments ruptured and the ship sank. Some 1,500 of its 2,200 passengers died.</p>
        </div>
        <h2>How Many Children were at the Titanic?</h2>
        <div className='children-intro'>
        <AllChildren />
        <img id='children-img' alt="Children at Titanic" width={500} height={410} src='https://media.npr.org/assets/img/2012/04/17/orphans_custom-498a93624c6c844f1a71e41b94153025efd4831d-s1600-c85.webp'></img>
        </div>
      </div>
    </div>
  )
}
