import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AjouterCitie } from './reducer';
function Q5(){
const Pays = useSelector((state)=>state.Pays)
const dispatch=useDispatch()
const [Name,setName]=useState()
const [District,setDis]=useState()
const [Population,setPop]=useState()
const [Capital,setCap]=useState()
const [NamePay,setNamePay]=useState()
const [IndepYear,setYear]=useState()

let Citie = {
    Name : NamePay,
    Cities :{
        Name:Name,
        District:District,
        Population:Population,
        Capital:Capital
    }
}
console.log(Citie)
return(
    <div>
        <form onSubmit={(event) => {
            event.preventDefault();
         }}>
        <h3>ADD A CITIE :</h3>
        <label> Pay Name : </label>
        <input type="Text" onChange={(event) => setNamePay(event.target.value)}/><br/><br/>
        <label> Citie Name : </label>
        <input type="Text" onChange={(event) => setName(event.target.value)}/><br/><br/>
        <label> Citie District : </label>
        <input type="Text" onChange={(event) => setDis(event.target.value)}/><br/><br/>
        <label> Citie Population : </label>
        <input type="Text" onChange={(event) => setPop(event.target.value)}/><br/><br/>
        <label> Citie Capital : </label>
        True : <input type="radio" name="Capital" onChange={(event) => setCap(event.target.value)}/>
        False : <input type="radio" name="Capital" onChange={(event) => setCap(event.target.value)}/>
         <br/><br/>
         <label> IndepYear : </label>
        <input type="Text" onChange={(event) => setYear(event.target.value)}/><br/><br/>
        <button onClick={(e)=>{e.preventDefault();
            dispatch(AjouterCitie(Citie))
            console.log(Pays)
            }}>
                Add</button>
        </form>
    </div>
)
}
export default Q5;