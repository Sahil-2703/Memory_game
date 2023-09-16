import React, { useState } from 'react'

const Card = ({item, id, handleClick}) => {
    const [initial, setInitial] = useState(true)
    const itemClass = item.stat ? "active" + item.stat : ""
    const styles={
        card:{
            backgroundColor:item.color,
            width:80,
            height:80,
            borderRadius:5,
        },
        itemClass:{
            itemClass: itemClass
        },
        cardInitial:{
            backgroundColor:'white',
            width:80,
            height:80,
            borderRadius:5,
        }
    }
    const showColor = () => {
        setInitial(!initial);
        handleClick(id)
    }

  return (
    <div style={initial === true ? styles.cardInitial : styles.card || styles.itemClass } onClick={showColor}/>
  )
}

export default Card
