/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import search from '../../assets/searchIcon.svg'
import Vector1 from '../../assets/Vector.svg'
import grid from '../../assets/bx-grid-alt.svg'
import moon from '../../assets/bx-moon.svg'
import wBadge from '../../assets/wBadge.svg'
import translate from '../../assets/Translate.svg'
export default function SearchBar(){

    return (
        <div className="flex justify-between px-6 py-3 bg-white rounded-lg mb-6" style={{"boxShadow": "0px 1px 3px 2px rgba(50, 71, 92, 0.06), 0px 2px 5px 1px rgba(50, 71, 92, 0.04), 0px 1px 3px 2px rgba(50, 71, 92, 0.02)" }}>
            <div className='w-full flex'>

            <div className='w-6 h-6 ml-3'><img src={search} /></div>
            <input className='border-0 ring-0 ml-5 w-full' placeholder='Search (Ctrl+/)' ></input>

            </div>
            <div className='flex'>
                <div className='w-6 h-6 ml-4'><img className='w-full' src={Vector1} /></div>
                <div className='w-6 h-6 ml-4'><img className='w-full' src={grid} /></div>
                <div className='w-6 h-6 ml-4'><img className='w-full' src={moon} /></div>
                <div className='w-6 h-6 ml-4'><img className='w-full' src={wBadge} /></div>
                <div className='w-6 h-6 ml-4'><img className='w-full' src={translate} /></div>

            </div>
        </div>

    );
}