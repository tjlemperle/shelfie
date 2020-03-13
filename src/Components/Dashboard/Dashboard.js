import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(){
        super()

        this.state ={}
    }

    render(){
        return(
            <div>
                <div>
                    Dashboard Component
                </div>
                <Product />
            </div>
        )
    }
}

export default Dashboard