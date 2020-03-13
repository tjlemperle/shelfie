import React from 'react'
import Product from '../Product/Product'

function Dashboard(props){

        return(
            <div>
                <div>
                    {props.inventory.map(e => {
                        return <Product 
                                key = {e.id}
                                product={e}
                        
                        />
})}
                </div>

            </div>
        )
}

export default Dashboard