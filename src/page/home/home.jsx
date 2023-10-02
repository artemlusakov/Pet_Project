import React from 'react';
import Navigation from "../../components/navigateon/navigation";
import './home.css'

import Logo from '../../assets/img/Deadbydaylight_logo.webp'
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
        </div>
    );
};

export default Home;