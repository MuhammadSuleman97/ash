/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import bucket from '../../assets/bucket.svg'
import calender from '../../assets/calender.svg'
import location from '../../assets/location.svg'
import './basicInfo.css'
import persontick from '../../assets/person-tick.svg'
import cover from '../../assets/cover.png'
import profilePic from '../../assets/profile-pic.png'
import buttonIcon from '../../assets/button-icon.png'

export default function BasicInfo() {
    return (
        <div className='w-full'>
            <div className=''>
                <img className='w-full' src={cover}/>
            </div>
            
            <div className='bg-white flex justify-between px-5  items-center relative'>

                <div className='flex items-center'>
                    <div className='w-40 h-40 overflow-visible relative'>
                        <img className='w-full absolute -top-7' src={profilePic}/>
                    </div>
                    <div className='ml-5 flex flex-col gap-5 pt-4 items-baseline'>
                        <h2
                            className='text-2xl'
                            style={{
                            "color": "rgba(50, 71, 92, 0.87)"
                        }}>Hafiz Awais</h2>
                        <div className='flex justify-between'>
                            <div className='flex mr-6'>
                                <img className='w-5 mr-3' src={bucket}></img>
                                <p>UX Designer</p>
                            </div>
                            <div className='flex mr-6'>
                                <img className='w-5 mr-3' src={location}></img>
                                <p>Vatican City</p>
                            </div>
                            <div className='flex mr-6'>
                                <img className='w-5 mr-3' src={calender}></img>
                                <p>Joined April 2011</p>
                            </div>

                        </div>
                    </div>
                </div>
                <a
                    className='flex justify-between items-center bg-indigo-700 text-white py-2 px-6 text-sm rounded-md mt-16'
                    style={{
                    "boxShadow": "0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)"
                }}
                    href="/">
                    <div className='w-4 mr-2'>
                        <img className='w-full' src={buttonIcon}></img>
                    </div>
                    <p>CONNECTED</p>
                </a>
            </div>
        </div>
    );
}