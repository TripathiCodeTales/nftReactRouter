import React, { useState,useContext } from 'react';
import { useForm } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from './Contexts/AppContext';
import './App.css';

export default function AddCart() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const {listItems, onAddTask} = useContext(AppContext)
    
    const handleOnIdChange = (event) => {
        setId(event.target.value);
    };

    const handleOnImageChange = (event) => {
        setImageUrl(event.target.value);
    }
    const handleOnNameChange = (event) => {
        setName(event.target.value);
    }

    const handleOnPriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleOnTextChange = (event) => {
        setText(event.target.value);
    }

       const handleSubmit = (event) => {
        event.preventDefault();
        const cardItem = {
            id: event.target.elements.id.value,
            url: event.target.elements.image.value,
            name: event.target.elements.name.value,
            price: event.target.elements.price.value,
            text: event.target.elements.text.value,
        }
        onAddTask(cardItem);
        navigate("/CardList");
    }

    const handleOnClick = () => {
        navigate("/DeleteCart");
    }

    return (
        <div className = "addcart">
            
            <h1 className="admin-container">Welcome to Cart</h1>
            <div className="admin-form">
            <form onSubmit={handleSubmit} style={{marginTop:"30px"}}>        
                <label style={{marginLeft:"20px"}} for="id" >ID: </label>
                    <input style={{marginLeft:"70px"}} id="id" value={id} type="text" onChange={handleOnIdChange} name="id" required /><br /><br />
                <label style={{marginLeft:"20px"}} for="image">IMAGE: </label>
                    <input style={{marginLeft:"35px"}} id="image" value={imageUrl} name="image" type="text"
                        onChange={handleOnImageChange} 
                    /><br />
                   
                {
                    imageUrl && (
                        <div>
                            <img
                                src={imageUrl}
                                alt="Image Preview"
                                style={{ height: "100px", width: "100px",display:"inline"}} />
                        </div>

                    )
                }
                
                <br />
                <label style={{marginLeft:"20px"}} for="name">NAME : </label>
                    <input style={{marginLeft:"35px"}} id="name" type="text" value={name} onChange={handleOnNameChange} name="name"/><br /><br />
                <label style={{marginLeft:"20px"}} for="price">PRICE :</label>
                    <input  style={{marginLeft:"40px"}} id="price" type="text" value={price} onChange={handleOnPriceChange} name="price" /><br /><br />
                <div>
                <label style={{marginLeft:"20px"}} for="description">Description: </label>
                    <textarea  id="description" type="text" value={text} onChange={handleOnTextChange} name="text"/>
                <button type="submit" className="submit-btn" style = {{width: "100px"}}>
                    Add to cart
                </button>
                <button onClick = {handleOnClick} className= "edit-list">
             Edit the list
            </button>
            </div>
            </form>
            </div>
            
            
        </div>
    )
}