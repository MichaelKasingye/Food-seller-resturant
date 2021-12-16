import React from 'react'
import ProductCard from './ProductCard'

function ProductCards({data, title}) {
    console.log(data);
    return (
        <div className="row ">
            <h3 className="fw-bold">{title}</h3>
            {data.map((info,index) =>(
                <ProductCard
                 key={index}
                 title={info.title}
                 path={info.path}
                 description={info.description}
                 price={info.price}
                 image={info.image}
                 alt={info.description}/>

            ))}
        </div>
    )
}

export default ProductCards
