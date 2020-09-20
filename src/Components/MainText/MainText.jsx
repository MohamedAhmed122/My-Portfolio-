import React from "react";
import './MainTextStyles.css'

export default function MainText({children}) {
  return (
        <div className="main-text">
            <div className="after"></div>
                <h3 className='textMain'>{children}</h3>
            <div className="before"></div>
        </div>
  );
}
