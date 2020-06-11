import React from 'react';
import Rolex from '../../images/rolex.png';
import DHL from '../../images/dhl.png';
import Aramco from '../../images/aramco.png';
import Pirelli from '../../images/pirelli.png';
import Emirates from '../../images/emirates.png';
import Heineken from '../../images/heineken.png';
import './Globale.scss';


function Globale() {
    return (
        <div>

            <section className="global_wrapper">
                <section className="global_container">

                    <div className="global_textdiv">
                        <h2 className="global_h2">Global partners</h2>
                        <hr className="global_hr" />
                    </div>

                    <section className="global_img">
                        <figure className="img_figure">
                            <img src={Rolex} alt="Rolex" />
                        </figure>

                        <figure className="img_figure">
                            <img src={DHL} alt="DHL" />
                        </figure>

                        <figure className="img_figure">
                            <img src={Aramco} alt="Aramco" />
                        </figure>

                        <figure className="img_figure">
                            <img src={Pirelli} alt="Pirelli" />
                        </figure>

                        <figure className="img_figure">
                            <img src={Emirates} alt="Emirates" />
                        </figure>

                        <figure className="img_figure">
                            <img src={Heineken} alt="Heineken" />
                        </figure>
                    </section>

                </section>
            </section>

        </div>
    )
}

export default Globale
