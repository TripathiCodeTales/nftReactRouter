 import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import './App.css';
import AppContext from './Contexts/AppContext';



export default function CardList() {
    const {listItems} = useContext(AppContext)
    //   console.log(listItems)
    const cardListItems = listItems?.map(
        (individual) =>
        <Link to = {`/carddetails/${individual.id}`}>
            <li className ='CardList'>
                
                <img className='imagelist'
                    src={individual.url}
                    alt={individual.alt}
                    height={500}
                    width={500}
                />
                <p>
                    <b style= {{color:"blue"}}>{individual.name}</b>
                    <br />
                    {individual.price}
                    <br />
                    {individual.text}

                </p>
            </li>
            </Link>
    );
    return (
        <>
            <div>
                <nav>
                   
                <Card><ul>{cardListItems}</ul></Card>
                
                </nav>
            </div>
            
        </>
    )

}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}