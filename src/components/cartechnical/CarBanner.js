import React from 'react';
import CarbannerImg from '../../images/carbanner.jpg';
import './Cartechnical.scss';


function CarBanner() {
    return (
        <div>
            
            <section className="carbanner_container">
                <img className="carbanner_img" src={CarbannerImg} alt="formula one"/>
                <div className="carbanner_text">
                    <h2 className="carbanner_h2"> Cartechnical </h2>
                </div>
            </section>
            
        </div>
    )
}

export default CarBanner
