import React from 'react'

function AvengerBlock(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            <img src={props.thumb}/>
        </div>
    )
}

export default AvengerBlock