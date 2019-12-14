import React from 'react';
import AvengerBlock from './AvengerBlock';
import {Link} from 'react-router-dom'

 function AvengerList({items}){
    return(
        <div className='avengerList'>
            <h1>Avenger List</h1>
            <div className='test'>
            {items.map(list=>{
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