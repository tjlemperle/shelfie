
import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Form extends Component{
    constructor(){
        super()

        this.state ={
            name: '',
            price: '', 
            image: '',
        }
        
        this.initialState = this.state
    }

    handleImgChange(e){
        this.setState({
            image: e.target.value
        })
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange(e){
        this.setState({
            price: e.target.value
        })
    }

    resetInputs = () => {
        this.setState(this.initialState)

    }

    createNew = () => {
        this.props.createNewProduct()     
    }

    render(){
        return(
            <div className='form-container'>
                <div className='photo-container'>
                    <img alt='pic' src={require('../../elephant.jpg')} className='photo' />
                </div>
                <div className='inputs-container' id='input-boxes'>
                    
                    <div>
                    <h3>Image-URL:</h3>
                    <input
                    className='input' 
                    placeholder='Image URL'
                    type='text'
                    onChange={e => {this.handleImgChange(e)}}
                    value={this.state.image}
                    />
                    </div>
                    <div>
                    <h3>Name:</h3>
                    <input 
                    className='input'
                    placeholder='Name'
                    type='text'
                    onChange={e => {this.handleNameChange(e)}}
                    value={this.state.name}
                    />
                    </div>

                    <div>
                    <h3>Price:</h3>
                    <input 
                    className='input'
                    placeholder='Price'
                    type='text'
                    onChange={e => {this.handlePriceChange(e)}}
                    value={this.state.price}
                    />
                    </div>
                </div>
                <div className='buttons'>

                <button className='button' onClick={() => this.resetInputs()}>Cancel</button>
                <button className='button' onClick={() => this.createNew()}>Add to inventory</button>
                </div>

            </div>
        )
    }
}

export default Form