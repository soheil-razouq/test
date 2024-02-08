import {  createSlice } from "@reduxjs/toolkit"
import space from './imgs/sp.jpg';
import car from './imgs/car.jpg'
const PaysList=createSlice(
    {name:'Pays',
    initialState:[
        {   Code : 'MRC',
            Name: 'Maroc' ,
            Continent: 'Afrique',
            SurfaceArea: 70000,
            Image:space,
            IndepYear: 1956 ,
            Population:  '40 MIL HUB',
            Cities: {
            Name: 'Casablanca' ,
            District: 'west' ,
            Population: '15 MIL HUB' ,
            Capital : false 
        }
            },
            {   Code : 'EGY',
            Name: 'egybet' ,
            Continent: 'Afrique',
            SurfaceArea: 50000,
            Image:car,
            IndepYear: 1960 ,
            Population:  '55 MIL HUB',
            Cities: {
            Name: 'Gahirra' ,
            District: 'north' ,
            Population: '20 MIL HUB' ,
            Capital : true 
        }
            },
        ],
    reducers:{
        AjouterCitie:(state,action)=>{
            state.push({...action.payload,id:state.lenght+1})
            return state;
        },
    }
    })
export const {AjouterCitie}=PaysList.actions;
export default PaysList.reducer;
