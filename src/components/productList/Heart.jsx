import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

const Heart = ({onClick, id, color}) => {
    const clickHandler = (e) => {
        e.preventDefault()
        e.stopPropagation();
        onClick(id)
    }

  return (
    <span className="absolute z-40" onClick={clickHandler}>
      <AiOutlineHeart size={24} color = {color}/>
    </span>
  );
}

export default Heart