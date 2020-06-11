import React from 'react';
import SliderTeams from '../sliderTeams/SliderTeams';
import Images from '../sliderTeams/images';
import Globale from '../globale/Globale';
import './Home.scss';


function Home() {
    return (
        <div>

            <main className="home_wrapper">
                <SliderTeams images={Images} />
                <Globale />
            </main>
            
        </div>
    )
}

export default Home
