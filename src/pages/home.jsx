import React, { useState } from 'react';
import "./home.css";
import "./responsive.css";
import Singlecolor from "./singlecolor";

import Values from "values.js";


export default function Home() {
    const [color, setColor] = useState('');
    const [error, setEreror] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));


const handleSubmit = (targetEvent) =>{
    targetEvent.preventDefault();
    
    try {
        let colors = new Values(color).all(10);
        setList(colors)
        console.log(list)
    } catch (error) {
        setEreror(true)
        console.log(error)
        
    }

}

    return (
        <>
        <div className='container'>
            <section className='wrapper'>
                    <h3>Color Generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={color} 
                        name="" id="" onChange={(defEvent)=>
                        setColor(defEvent.target.value)}
                        placeholder='#f15025' className={`${error? 'inputBox errorInput' : 'inputBox'}`} />

                        
                        <button className='btn'
                        type='submit'>Generate</button>
                    </form>

            </section>
            
        <section className='colors'>
            {list.map((singleColor, index)=>{
                console.log(list)
                
                return <Singlecolor key={index} {...singleColor}
        
                index = {index} hex={singleColor.hex}/>

            })}

        </section>

          </div>

        </>
    )
}
