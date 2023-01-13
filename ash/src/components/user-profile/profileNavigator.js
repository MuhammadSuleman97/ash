/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import profileIcon from '../../assets/profile-icon.svg'
import teamIcon from '../../assets/team-icon.svg'
import connectionIcon from '../../assets/connection-icon.svg'
import projectIcon from '../../assets/projects-icon.svg'
import './cs.css'
import NavigationButton from "./navigationButton";
export default function ProfileNavigator(){
    const [selector,setSelector] = useState(false)
    const [activeButton,setActiveButton] = useState('PROFILE')
    // let selected =''
    const activeClasses = 'flex justify-between items-center bg-indigo-700 text-white py-2 px-6 text-sm rounded-md mr-1 '
    const nonActiveClasses =  'flex justify-between items-center text-black py-2 px-6 text-sm rounded-md mr-1 '
    const handleSelector = (e) => {
        const {textContent} = e.target;
        setActiveButton(textContent)
        // selected = e.target.textName;
        setSelector(!selector)
    }

    const buttons = ['PROFILE','TEAM', 'PROJECTS', 'CONNECTIONS'];
    const images = [profileIcon, teamIcon, projectIcon, connectionIcon];

    return (
        <div className="flex  mt-6 mb-6 ">
            {buttons.map((button, index) => {
                return (
                    <NavigationButton
                        text={button}
                        image={images[index]}
                        clickEvent={handleSelector}
                        classes={activeButton === button ? activeClasses : nonActiveClasses}
                    ></NavigationButton>
                );
            })}
        </div>
    );
}