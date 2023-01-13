/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import BasicInfo from '../basicInfo';
import SearchBar from '../searchBar';
import ProfileNavigator from '../profileNavigator';
import Profile from './profile';

export default function UserProfile(){

    return (
        <div>
            <SearchBar></SearchBar>
            <BasicInfo></BasicInfo>
            <ProfileNavigator></ProfileNavigator>
            <Profile></Profile>

        </div>
    );
}