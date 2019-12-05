import React from 'react';
import {avengers} from '../avengers';
import AvengerBlock from './AvengerBlock';

 function AvengerList(){
    return(
        <div>
            <h1>Avenger List</h1>
            {avengers.map(list=>{
               return <AvengerBlock 
               name={list.name}
               info={list.description} 
               thumb = {list.thumbnail}
               key={list.id}/>
            })}
        </div>
    )
 } 

 export default AvengerList