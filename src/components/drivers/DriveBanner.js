import React from 'react';
import DrivebannerImg from '../../images/drivebanner.jpg';
import './Drivers.scss';


function DriveBanner() {
    return (
        <div>
            
            <section className="drivebanner_container">
                <img className="drivebanner_img" src={DrivebannerImg} alt="formula one"/>
                <div className="drivebanner_text">
                    <h1 className="drivebanner_h1"> Cartechnical </h1>
                </div>
            </section>

        </div>
    )
}

export default DriveBanner
