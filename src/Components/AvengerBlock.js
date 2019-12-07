import React from 'react'
import {Link} from 'react-router-dom'
function AvengerBlock(props){
    return(
        <div className='avengerBlock'>
            <Link to={`/avengers/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <img className='imgBlock' src={props.thumb}/>
        </div>
    )
}

export default AvengerBlock