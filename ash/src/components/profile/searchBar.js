/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import search from '../../assets/searchIcon.svg'
import SearchBara from './searchBar.css'
import Vector1 from '../../assets/Vector.svg'
import grid from '../../assets/bx-grid-alt.svg'
import moon from '../../assets/bx-moon.svg'
import wBadge from '../../assets/wBadge.svg'
import translate from '../../assets/Translate.svg'
export default function SearchBar(){

    return (
        <div className="header">
            <div className='search-bar'>
            
            <div className='lang'><img src={search} /></div>
            <input placeholder='Search (Ctrl+/)' ></input>

            </div>
            <div className='header-setting'>
                <div className='lang'><img src={Vector1} /></div>
                <div className='lang'><img src={grid} /></div>
                <div className='lang'><img src={moon} /></div>
                <div className='lang'><img src={wBadge} /></div>
                <div className='lang'><img src={translate} /></div>

            </div>
        </div>

    );
}