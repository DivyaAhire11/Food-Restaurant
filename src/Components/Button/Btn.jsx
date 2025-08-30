import React from 'react'
import "./btn.css"

const Btn = ({ info, onClick }) => {
  return (
    <button className="menu-btn see-more" onClick={onClick}>
      {info}
    </button>
  );
}


export default Btn