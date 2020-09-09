import React, {useState} from 'react';

import './Style.css'

const ProgressBar = ({done}) => {
    const [style, setStyle] = useState({});
    const [progress,setProgress] = useState(false)
   
  
    const handleNav=()=>{
      if (window.scrollY >= 490 || window.screenY >= 490){
        setProgress(true)
      }else{
        setProgress(false)
      }
    }
    window.addEventListener('scroll',handleNav)
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress" style={{marginTop: '12rem'}}>
			<div className={progress? 'progress-active': 'progress-done'} style={style}>
				{done}%
			</div>
		</div>
	)
}
export default ProgressBar;