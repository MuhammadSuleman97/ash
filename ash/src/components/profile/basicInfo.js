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

export default function BasicInfo(){
    return (
        <div className='info'>
            <div className='cover-pic'>
                <img src={cover} />
            </div>
            <div className='info-detail'>

                <div className='information'>
                    <div className='profile-pic'>
                        <img src={profilePic} />
                        </div>
                    <div className='name'>Hafiz Awais</div>
                    <div className='text-details'>
                        <div className='text'>
                            <img src={bucket}></img>
                            <p>UX Designer</p>
                        </div>
                        <div className='text'>
                        <img src={location}></img>
                            <p>Vatican City</p>
                        </div>
                        <div className='text'>
                        <img src={calender}></img>
                            <p>Joined April 2011</p>
                        </div>

                    </div>
                </div>
                <div className='status-button'>ghjghjg</div>
            </div>
        </div>
    );
}