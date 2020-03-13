import React from 'react'

function Product(props){

    return(
        <div>
            {props.product.name}
            {props.product.price}
            {props.product.img}
        </div>
    )
    
}

export default Product