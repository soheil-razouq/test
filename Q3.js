import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
function Q3(props){
    const Pays = useSelector((state)=>state.Pays)
    console.log(props.data)
    const [Card,setCard]=useState()
    return(
        <div>
        {props.AffiCard ?
            
        Pays.map((P)=>{
                return(
                    <div style={{border:'5px solid black',height: '300px' , width: '300px',padding:'4px'}} key={P.Code}>
                        <img src={P.Image} alt='' className='space' style={{height: '60%' , width: '80%'}}></img>
                        <p style={{padding:'0%'}}>Name : {P.Name}</p>
                        <p style={{padding:'0%'}}>Population : {P.Population}</p>
                        <p style={{padding:'0%'}}>SurfaceArea : {P.SurfaceArea}</p>
                    </div>
                    )
            }
        )
        :
        Pays.map((P)=>{
                if(P.IndepYear === props.data){
                    return(
                        <div style={{border:'5px solid black',height: '300px' , width: '300px',padding:'4px'}} key={P.Code}>
                            <img src={P.Image} alt='' className='space' style={{height: '60%' , width: '80%'}}></img>
                            <p style={{padding:'0%'}}>Name : {P.Name}</p>
                            <p style={{padding:'0%'}}>Population : {P.Population}</p>
                            <p style={{padding:'0%'}}>SurfaceArea : {P.SurfaceArea}</p>
                        </div>
                        )
                }
            })
        
        }
            {console.log(props.AffiCard)}
        </div>
    )
}
export default Q3;