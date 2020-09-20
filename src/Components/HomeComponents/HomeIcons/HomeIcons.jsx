import React, { Fragment } from "react";
 
import SpeedIcon from "@material-ui/icons/Speed";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import Dev from "../Dev/Dev";

import './Style.css'
import MainText from "../../MainText/MainText";
const HomeIcons = () => {
  
  return (
    <Fragment>
        <MainText >About</MainText>
        <div className='container5'>
            {
                icons.map(icon =>(
                    <div key={icon.id}>
                    <div className='container1'>
                        <div className='container2' >
                            {icon.icon}
                        </div>
                    </div>
                        <h2 className='title'>{icon.name}</h2>
                        <div  className='text'>
                            <p className='subTitle'>{icon.description}</p>
                        </div>
                    </div>

                ))
            }
        </div>
        <Dev />
    </Fragment>
  );
};
export default HomeIcons;




const icons =[
    {
        id: 1,
        name: 'Fast',
        icon: <SpeedIcon className='mainIcons' fontSize='large' />,
        description: 'Fast load times and lag free interaction, my highest priority'
    },
    {
        id: 3,
        name: 'Intuitive',
        icon: <WbIncandescentIcon className='mainIcons' fontSize='large'/>,
        description: 'Strong preference for easy to use, intuitive UX/UI.'
    },
    {
        id: 2,
        name: 'Responsive',
        icon: <ImportantDevicesIcon className='mainIcons' fontSize='large' /> ,
        description: 'My layouts will work on any device, big or small.'
    },
    {
        id: 2,
        name: 'Dynamic',
        icon: <CardMembershipIcon className='mainIcons'  fontSize='large'  />,
        description: "Websites don't have to be static, I love making pages come to life."
    },
]