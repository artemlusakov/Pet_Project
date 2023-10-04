import React from 'react';
import Navigation from "../../components/navigateon/navigation";
import './home.css'

import Logo from '../../assets/img/Deadbydaylight_logo.webp'
import PsLogo from'../../assets/img/PSLogo.png'
import XboxLogo from '../../assets/img/XBoxLogo.png'
import Nintendo from '../../assets/img/NintendoLogo.png'
import SteamLogo from '../../assets/img/SteamLogo.png'
import EgsLogo from '../../assets/img/EgsLogo.png'
import WindowsLogo from '../../assets/img/Windows.png'

import ign from '../../assets/img/ign.png'
import pc from '../../assets/img/PC_Gamer_old_logo.jpg'
import gamestor from '../../assets/img/GameStop.svg.png'
import bg from '../../assets/img/art1.jpg'

const Home = () => {
    return (
        <div>
            <div>
            <Navigation/>
            </div>

            <section className='Section1'>
                <div className='BackgroundSection1'>
                <img src={bg} alt=""/>
                </div>
                <div className="Section1Content">
                    <img src={Logo} alt=""/>
                        <button>BUY THE MAIN GAME</button>
                        <div className="Raiting">
                            <a href=""><h1>9/10</h1><img src={ign} alt=""/></a>
                            <a href=""><h1>88/100</h1><img src={pc} alt=""/></a>
                            <a href=""><h1>9/10</h1><img src={gamestor} alt=""/></a>
                        </div>
                </div>
            </section>

            <section className='Section2'>
                <h1>STAY ONE STEP AHEAD</h1>
                <div className='Section2Box'>
                    <h3>Email address</h3>
                    <div className='Section2Input'>
                        <input type="text" placeholder={'Enter your email address'}/>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </section>

            <section className="Section3">
                <div className='Welcome'>
                    <h1>Welcome to the deadly game of hide and seek</h1>
                    <div className='WelcomeImg'>
                        <img src={SteamLogo} alt="Steam"/>
                        <img src={EgsLogo} alt="Egs"/>
                        <img src={WindowsLogo} alt="Windows"/>
                        <img src={PsLogo} alt="Ps"/>
                        <img src={XboxLogo} alt="Xbox"/>
                        <img src={Nintendo} alt="Switch"/>
                    </div>
                </div>

                <div className='Section3Container'>

                </div>
            </section>
        </div>
    );
};

export default Home;