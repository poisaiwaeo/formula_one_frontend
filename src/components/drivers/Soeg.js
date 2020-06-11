import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DriveBanner from '../drivers/DriveBanner';
import { soegNoget } from '../helpers/DriversAPI';
import './Drivers.scss';


function Soeg() {

    // Snup sogeordet (parameter) fra url'en/adressen
    const { soegeord } = useParams();

    // Kald søgemetode i API
    // State 
    const [soegdrivers, setSoegdrivers] = useState({});


    // useEffect - Når component er rendered - kun en gang
    useEffect(() => {

        (async () => {

            setSoegdrivers(await soegNoget(soegeord));

        })()

    }, [soegeord])


    // Det der skal vises hvis det er ingen match
    let soegeResultat = <h2> There is no match - search again </h2>

    // ... overskrives af dette - hvis der er match
    if (soegdrivers.length > 0) {
        soegeResultat = soegdrivers.map(s => {
            return (
                    <section className="driversinfo_card" key={s._id}>
                    <section className="driversinfo_header">
                    <Link className="driversinfo_link" to={'/driver/' + s._id}><h5 className="driversinfo_h4"> {s.name} </h5></Link>
                            <hr className="driversinfo_hr" />
                            <p className="driversinfo_p">  {s.teams} </p>
                        </section>

                        <section className="driversinfo_image">
                            <img className="driversinfo_img" src={"http://localhost:3007/images/" + s.coverbillede.filnavn} alt="formula one drivers" />
                            <h2 className="driversinfo_h2"> {s.number} </h2>
                        </section>
                     </section>
            )
        });
    }



    return (
        <div>

            <DriveBanner />
            
            <div className="driversinfo_wrapper">
                <section className="driversinfo_container">

                    {/* SØGNING */}
                    <section className="soeg_container">
                        <div className="soeg_form">
                            <Link to={"/drivers"}><button className="soeg_btn"> Go back </button></Link>
                        </div>
                    </section>

                    <section className="driversinfo">
                        {soegeResultat}
                    </section>

                </section>
            </div>

        </div>
    )
}

export default Soeg
