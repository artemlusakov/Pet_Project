import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './navigation.css'
import Select from 'react-select'


import logo from '../../assets/img/Logo.png'
import languish from '../../assets/img/Languig.png'


const Navigation = () => {

    const options = [
        { value: 'English', label: 'English' },
        { value: 'Deutsch', label: 'Deutsch' },
        { value: 'Franch', label: 'Franch' },
        { value: 'Pjrtugali', label: 'Pjrtugali'}
    ]


    return (
        <div className="Navigation">

            <nav>
                <a className="Logo" href=""><img src={logo} alt="Logo"/></a>

                <ul>
                    <NavLink to={'/'}>HOME</NavLink>
                    <NavLink to={'Game'}>GAME</NavLink>
                    <NavLink to={'News'}>NEWS & MEDIA GALLERY</NavLink>
                    <NavLink to={'Community'}>COMMUNITY</NavLink>
                    <NavLink to={'Merch'}>MERCH</NavLink>
                    <NavLink to={'Help'}>HELP</NavLink>
                </ul>

                <div className="NavigationButton">
                    <div className="NavigationButtonSelect">
                        <Select options={options}
                                className="SelectNav"
                                classNamePrefix="languish"
                                plaiseholder={options[0]}
                                isSearchable={false}


                        />
                    </div>
                    <button>PLAY NOW</button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;