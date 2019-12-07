import React from 'react';
import {avengers} from '../avengers';
import AvengerBlock from './AvengerBlock';
import {Link} from 'react-router-dom'

 function AvengerList(){
    return(
        <div className='avengerList'>
            <h1>Avenger List</h1>
            <div className='test'>
            {avengers.map(list=>{
               return <AvengerBlock 
               name={list.name}
               info={list.description} 
               thumb = {list.thumbnail}
               id={list.id}
               key={list.id}/>
                
            })}
            </div>
        </div>
    )
 } 

 export default AvengerList