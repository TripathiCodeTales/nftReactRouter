import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailLists } from './Details';
import './App.css';
import CardList from './CardList';

function CardDetail() {
    let { DetailsId } = useParams()
    const selectedItem = detailLists.find(detail => DetailsId.toString() === detail["id"].toString());

    return (
        <div id="CardDetail" >
            <img className='imageBig'
                src={selectedItem.url}
                alt={selectedItem.alt}
            />
            <br />
            <p className='Details'>
                {selectedItem.name}
                <br />
                {selectedItem.price}
                <br />
                {selectedItem.text}
            </p>
        </div>
    )
}

export default CardDetail;

