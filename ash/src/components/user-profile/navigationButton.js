/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

export default function NavigationButton({text,image,clickEvent,classes}){
    
    return (
            <div className={classes} onClick={clickEvent} >
                    <div className='w-4 mr-2'>
                        <img className='w-full' src={image}
                        ></img>
                    </div>
                    <p>{text}</p>
                </div>
    );
}