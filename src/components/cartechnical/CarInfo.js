import React from 'react';
import './Cartechnical.scss';


function CarInfo() {
    return (
        <div>
            <h2>Info</h2>

            <section className="carinfo_container">
                {/* <img className="carinfo_img" src="" alt="formula one"/> */}
                <div className="carinfo_text">
                    <h4 className="carinfo_h4"> Formula One Car </h4>
                    <p className="carinfo_p">
                        A Formula One car is an open-wheel, open-cockpit,
                        single-seat racing car for the purpose of being
                        used in Formula One competitions. It is equipped
                        with two wings (front and rear) plus an engine,
                        which is located behind the driver.
                    </p>
                    <p className="carinfo_p">
                        The F1 races are conducted on specifically built
                        racing tracks called ‘circuits’. Sometimes they
                        are conducted on closed public roads as well.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default CarInfo
