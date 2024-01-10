import React, { useContext, useState } from "react";
import AppContext from './Contexts/AppContext';
import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function DeleteCart() {
    const [selectItem, setSelectItem] = useState([]);
    const { listItems, deleteTask } = useContext(AppContext)
    const navigate = useNavigate();

    const handleOnDelete = () => {
        deleteTask(selectItem)
    }

    const handleOnChange = (event, item) => {
        console.log(event.target.checked)
        if (event.target.checked) {

            setSelectItem([...selectItem, item]);
        } else {
            const updatedList = selectItem.filter((task) => task.id !== item.id
            )
            console.log(updatedList);
            setSelectItem(updatedList)
        }
    }

    const handleOnClick = (id) => {
        navigate(`/EditCart/${id}`,{state:{Id:id}})
    }
    console.log("arpita", listItems);
    return (
        <div className="deleteCart">
            <h1 className="deleteTitle">Update Cart</h1>
            {listItems.map((item) => {
               
                return (
                    <div className="deleteItem" style={{ display: 'flex', alignItems: 'center' }} key={item.id}>
                        <span>
                            <input type="checkbox" onChange={(event) => handleOnChange(event, item)} />
                        </span>
                        &nbsp;
                        {item.id}
                        <img
                            src={item.url}
                            alt={item.alt}
                            style={{ height: "30px", width: "30px", margin: "10px" }} />
                        {item.name}
                        <br />
                        {item.price}
                        <br />
                        {item.text}

                        <i className="editNav" onClick = {()=>handleOnClick(item.id)} style = {{color:"blue"}}>
                <AiFillEdit />
                        </i>
                    </div>
                )
            })}
            <div>
                <button onClick={handleOnDelete} className='delete-btn'>
                    Delete
                </button>
                <button className='delete-btn'>
                    Cancel
                </button>
            </div>
            
        </div>
    )
}

