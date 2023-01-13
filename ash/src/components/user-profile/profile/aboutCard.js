
import ProfileIcon from '../../../assets/profile-icon.svg'

import * as React from 'react';



const InfoItem = ({image,option,value})=>{
    return(
        <div className='flex pl-1.5 pr-1.5 p-1'>
            <img src = {image} alt="na" className='bg-black pl-1'></img>
            <p className='font-bold pl-1' >{option}</p> <p>{value}</p>
        </div>
    );
}     

    let array=[]
    for(let i=0;i<5;i++)
    {
        array.push(<InfoItem image={ProfileIcon} option="Name:" value="Hamza Amir" />)
    }

export default function AboutCard() {
  return (
    <>
          <p className='place-items-start'>About</p>{array}
    </>    
          
  );
}

