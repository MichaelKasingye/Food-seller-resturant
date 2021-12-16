import React from 'react'

function ProductCard({title,path,description,price,image}) {
    return (
        <div className="col-lg-4 col-md-6 mb-3 animate__animated animate__zoomIn">
        <div className="food">
          <div className="pic">
            <img src={image} className="img-fluid" alt ="chef" />
          </div>
          <div className="food-info">
            <h4>{title}</h4>
            <span style={{color:"#c0392b"}}>Ugx:{price}</span>
            <div className="social">
            <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductCard
