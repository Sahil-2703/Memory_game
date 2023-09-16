import React, { useState } from 'react'
import Card from './Card'

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, color: '#000000', stat: "" },
        { id: 1, color: '#000000', stat: "" },
        { id: 2, color: '#ffa200', stat: "" },
        { id: 2, color: '#ffa200', stat: "" },
        { id: 3, color: '#ddff00', stat: "" },
        { id: 3, color: '#ddff00', stat: "" },
        { id: 4, color: '#84ff00', stat: "" },
        { id: 4, color: '#84ff00', stat: "" },
        { id: 5, color: '#11ff00', stat: "" },
        { id: 5, color: '#11ff00', stat: "" },
        { id: 6, color: '#00ff59', stat: "" },
        { id: 6, color: '#00ff59', stat: "" },
        { id: 7, color: '#00ffd5', stat: "" },
        { id: 7, color: '#00ffd5', stat: "" },
        { id: 8, color: '#00b7ff', stat: "" },
        { id: 8, color: '#00b7ff', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "success"
            items[prev].stat = "success"
            setItems([...items])
            setPrev(-1)
        }
        else{
            items[current].stat = "failure"
            items[prev].stat = "failure"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
            },1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = 'active'
            setItems([...items])
            setPrev(id)
        }
        else{
            check(id)
        }
    }
  return (
    <div className='grid grid-cols-4 grid-rows-4 container w-96 h-96 mt-10'>
        {items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick}/>
        ))}
    </div>
  )
}

export default Cards
