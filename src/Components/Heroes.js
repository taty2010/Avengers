import React from 'react'



function Heroes({items, match}){
    const itemId = match.params.id;

    const avengerResults = items.filter(item => item.id === Number(itemId));
    const item = avengerResults[0];

    return(
      <div>
        <img className='heroheader'src={item.img} />
        <div className='heroDescriptions'>
          <h1>{item.name}</h1>
          <h3>{item.description}</h3>
          <h4>{item.movies}</h4>
        </div>
      </div>
        
    )
}

export default Heroes