/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import profileIcon from '../../assets/profile-icon.svg'
import RecipeReviewCard from './connectionCard';
export default function Profile(){

    return (
        <div className=" px-6 py-3 bg-white mb-6" >
            <div className='w-full '>
            <p className='text-xs'>ABOUT</p>
            <img src=""></img>
            </div>

            <RecipeReviewCard></RecipeReviewCard>
        </div>

    );
}