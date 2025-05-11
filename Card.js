import React from 'react'
import {FcLike} from "react-icons/fc";

const Card = () => {
  return (
    <div>
      <img src = {CountQueuingStrategy.image.url}></img>

      <div>
        <button>
            <FcLike fontSize = "1.75rem"/>
        </button>
      </div>
      <p>{Course.title}</p>
      <p>{Course.discription }</p>
    </div>
  )
}

export default Card
