import React, { useState } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";


const detailList = [{

    id: 101,
    url: "https://ipfs.io/ipfs/bafybeidzeojceo2yzsuefjhdjhnqt3j5x3i7nlebassrka7npdulgc3ho4/ape-army.png.image/png",
    alt: "Ape army",
    name: "Ape army",
    price: "$ 2.5 eth",
    text: "0* BB 8 BB 69",

},
{
    id: 102,
    url: "https://ipfs.io/ipfs/bafybeie2fydme7jqewmjpovvmuzlfwsbwl2wyfy3c637f3oomgmiad6z54/ape-lady.png.image/png",
    alt: "Ape Lady",
    name: "Ape Lady",
    price: "$ 3.0 eth",
    text: "0* 82 8 BB 69",
},
{
    id: 103,
    url: "https://ipfs.io/ipfs/bafybeihrkqx3q4vuwzdr2tgafzy7pmtqm2awtj3muh4qxcmljncqkqcdpi/lion-nft.jpeg.image/jpeg",
    alt: "Lion",
    name: "Lion",
    price: "$ 2.6 eth",
    text: "0* 22 8 BB 69",

},
{
    id: 104,
    url: "https://ipfs.io/ipfs/bafybeifa4ntsddmz6hxpgxbin3pi6lm27mtbhhnrirwdiu626tttlalcka/lucky-2.png.image/png",
    alt: "Lucky Miner",
    name: "Lucky Miner",
    price: "$ 2.7 eth",
    text: "0* 86 8 BB 69",

},
{
    id: 105,
    url: "https://ipfs.io/ipfs/bafybeieafi3y3kfzti64vvs2lww4agpbvemgbzx5ymqy65kmvzeuab3ham/basquet-nft.webp.image/webp",
    alt: "Player",
    name: "Player",
    price: "$ 2.1 eth",
    text: "0* 48 8 BB 69",
},
{
    id: 106,
    url: "https://ipfs.io/ipfs/bafybeifqah3ueqnllcubnnkkf5qrv5w4ookdvsvgqoxwzsjpvaqhygljze/7e0cf4a4cd819b8ad91b86213d5c15ba.jpg.image/jpeg",
    alt: "Ape Sailor",
    name: "Ape Sailor",
    price: "$ 2.6 eth",
    text: "0* 89 8 BB 69",
}]

const AppProvider = ({ children }) => {
    const [listItems, setListItems] = useState(detailList);

    const handleAddTask = (cardItem) => {
        // cardItem = cardItem[0];

        console.log("cardItem.image :" + cardItem.url);
        setListItems([...listItems,
        {
            id: +cardItem.id,
            url: cardItem.url,
            name: cardItem.name,
            price: cardItem.price,
            text: cardItem.text,
        }])
    }

    const deleteTask = (selectItems) => {
        function getDifference(listItems, selectItem) {
            return listItems.filter((obj1) => {
                return !selectItem.some((obj2) => {
                    return obj1.id === obj2.id;
                })
            })
        }
        const filteredItem = (getDifference(listItems, selectItems))
        setListItems(filteredItem);
    }

    const handleEditTask = (editTask) => {
        console.log(editTask)
        const index = listItems.findIndex((item) => item.id == editTask.id)
        const updatedList = [...listItems];

         updatedList[index] = {
            id:editTask.id,
            url: editTask.url,
            name: editTask.name,
            price: editTask.price,
            text: editTask.text,
         }
         console.log(updatedList);
         setListItems(updatedList);
    }
        
        
    

    return (
        <AppContext.Provider value={{ listItems, setListItems,onEditTask:handleEditTask ,onAddTask: handleAddTask, deleteTask: deleteTask }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;