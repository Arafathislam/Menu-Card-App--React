import React from 'react'

function MenuCard({menuData}) {





  return (
    <>

    <section className="main-card--cointainer">

 

      {
        menuData.map((curEle)=>{
          return (
            <>
    <div clssName="card-container" key={curEle.id}>
    <div className='card'>
        <div className='card-body'>
                <span className='card-number card-circle subtle'>{curEle.id}</span>
                <span className='card-author subtle'>Breakfast </span>
                <h2 className='card-title'>{curEle.name}</h2>
                <span className='card-description subtle'>{curEle.description}</span>
                <div className='card-read'>Read</div>

        </div>
        <img src={curEle.image} alt="images" className='card-media'/>
        <span className='card-tag subtle'>Order Now</span>
    </div>
  </div>

    
            
            </>
          );

        }) }

     </section>



    </>
  )
}

export default MenuCard
