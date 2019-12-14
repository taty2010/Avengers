import React from 'react'
import {Link} from 'react-router-dom'
function AvengerBlock(props){
    return(
        <div className='avengerBlock'>
            <Link to={`/avengerList/${props.id}`}>
                <h2>{props.name}</h2>
            <img className='imgBlock' src={props.thumb}/>
            </Link>
        </div>
    )
}

export default AvengerBlock