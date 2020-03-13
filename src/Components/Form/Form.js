
import React, {Component} from 'react';
// import './Form.css';
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

    render(){
        return(
            <div>
                <div className='inputs-container' id='input-boxes'>
                    <input
                    className='input' 
                    placeholder='Image URL'
                    type='text'
                    onChange={e => {this.handleImgChange(e)}}
                    value={this.state.image}
                    />
                    <input 
                    className='input'
                    placeholder='Name'
                    type='text'
                    onChange={e => {this.handleNameChange(e)}}
                    value={this.state.name}
                    />
                    <input 
                    className='input'
                    placeholder='Price'
                    type='text'
                    onChange={e => {this.handlePriceChange(e)}}
                    value={this.state.price}
                    />
                </div>
                <button className='button' onClick={() => this.resetInputs()}>Cancel</button>


            </div>
        )
    }
}

export default Form