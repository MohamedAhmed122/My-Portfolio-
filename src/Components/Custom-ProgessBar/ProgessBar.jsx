import React, {useState} from 'react';

import './Style.css'

const ProgressBar = ({done}) => {
    const [style, setStyle] = useState({});
    // const [progress,setProgress] = useState(false)
   
  
    // const handleNav=()=>{
    //   if (window.scrollY >= 430 || window.screenY >= 430){
    //     setProgress(true)
    //   }else{
    //     setProgress(false)
    //   }
    // }
    // window.addEventListener('scroll',handleNav)
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 5000);
	
	return (
		<div className="progress" style={{marginTop: '0.2rem', marginBottom: '0.9rem'}}>
			<div className='progress-active' style={style}>
				{done}%
			</div>
		</div>
	)
}
export default ProgressBar;