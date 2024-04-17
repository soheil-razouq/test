import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Q4(props){
    const Pays = useSelector((state)=>state.Pays)
    const  [Indep,setIndep]=useState()
    const handleClick=(e)=>{
        setIndep(+e.target.value)
        props.get(Indep)
        props.setAffiCard(false)
  }
  console.log(Indep)
    return(
        <div>
            <select onClick={handleClick}>
            <option>select a year</option>
            {
            Pays.map((P)=>{
                return(
                        <option>{P.IndepYear}</option>
                    // <p key={P.Code} style={{textAlign:'center'}}>{P.IndepYear}<br></br></p>
                     //comments
                     //COMMENTS2
                   )
                })
            }
        </select>
        </div>
    )
}
export default Q4;
