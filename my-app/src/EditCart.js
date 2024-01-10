import React, { useContext, useState, useEffect, useForm,useRef } from 'react';
import AppContext from './Contexts/AppContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function EditCart() {
    let { itemId } = useParams();
    const { setListItems, listItems, onEditTask } = useContext(AppContext)
    const [clickedItem, setClickedItem] = useState({ id: '', name: '', price: '', text: '',image: ''})
    const navigate = useNavigate();
    
    console.log("itemto edit" + itemId)
    useEffect(() => {
        const itemToEdit = listItems.find((item) => itemId === item.id.toString());
        if (itemToEdit) {
            setClickedItem(itemToEdit);
        }
    }, [itemId, listItems]);

    // Update the item's properties using separate handlers
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setClickedItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
   
    const handleOnClick = () => {
        setClickedItem(listItems)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const editTask = {
            id: event.target.elements.id.value,
            url:event.target.elements.image.value,
            name: event.target.elements.name.value,
            price: event.target.elements.price.value,
            text: event.target.elements.text.value,
        }
        onEditTask(editTask);
        navigate("/CardList");
    }

    return (
        <div className = "edit-page">
        <h1 className="edit-container">Welcome to Edit</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div>
                    <label for="id" style={{color:"blue", fontWeight:"500" , marginLeft:"20px"}}>ID:</label>
                        <input id="id" style={{marginLeft:"70px"}} value={clickedItem.id} onChange={handleOnChange} type="text" name="id" required />
                    <br />
                    <br />
                    <label for="image" style={{color:"blue",marginLeft:"20px",fontWeight:"500"}}>
                        IMG:
                        </label>
                        <input id="image" style={{marginLeft:"53px"}}
                            type= "text"
                             value =  {clickedItem.image} onChange = {handleOnChange} name = "image"/>
                        <br />
                        
                    {
                    clickedItem.url && (
                        <div>
                            <img
                                src={clickedItem.url}
                                alt="Image Preview"
                                style={{ height: "100px", width: "100px" }} />
                        </div>

                    )
                }
                    <br />
                    <label style={{marginLeft:"15px",color:"blue",fontWeight:"500"}} for="name">NAME: </label>
                        <input id="name" style={{marginLeft:"28px"}} type="text" value={clickedItem.name}
                            onChange={handleOnChange}
                            name="name"
                        />
                    <br />
                    <br />
                    <label style={{marginLeft:"20px",color:"blue",fontWeight:"500"}} for="price">
                        PRICE: </label>
                        <input style={{marginLeft:"30px"}} id="price" type="text" onChange={handleOnChange} value={clickedItem.price} name="price" />
                   
                    <br />
                    <label style={{marginRight:"20px",color:"blue",fontWeight:"500"}} for="description">
                        DESCRIPTION:</label>
                        <textarea type="text" value={clickedItem.text} name="text" onChange={handleOnChange} />
                    
                </div>
                <div>
                <button type='submit' className="submit-buttn">
                    Add To Cart
                </button>
                <button className="cancel" onClick={handleOnClick}>
                Discard Changes
            </button>
            </div>
            </form>
            
        </div>
    )
}