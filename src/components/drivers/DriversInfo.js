import React, { useRef, useState, useEffect } from 'react';
// npm i use-history
import { Link, useHistory } from 'react-router-dom';
import { hentAlleDrivers } from '../helpers/DriversAPI';
import './Drivers.scss';


function DriversInfo() {

    const driversInputRef = useRef(null);
    const history = useHistory();

    function handleSoeg() {
        history.push("/soeg/" + driversInputRef.current.value);
    };

    // State
    const [drivers, setDrivers] = useState({});

    useEffect(() => {
        hentAlleDrivers().then(setDrivers);
    }, []);

    // Det som skal vises hvis der er ingen kørere her
    let driversListe = <h2> There are no drivers </h2>

    // Hvis der er drivers, så skal den viser dette her
    if (drivers.length > 0) {

        driversListe = drivers.map(f => {
            return (

                <section className="driversinfo_card" key={f._id}>
                    <section className="driversinfo_header">
                        <Link className="driversinfo_link" to={'/driver/' + f._id}><h5 className="driversinfo_h4"> {f.name} </h5></Link>
                        <hr className="driversinfo_hr" />
                        <p className="driversinfo_p"> {f.teams} </p>
                    </section>

                    <section className="driversinfo_image">
                        <img className="driversinfo_img" src={"http://localhost:3007/images/" + f.coverbillede.filnavn} alt="formula one drivers" />
                        <h2 className="driversinfo_h2"> {f.number} </h2>
                    </section>
                </section>

            )

        });

    };



    // udskriver/ tilkaldt alt her nede og viser på siden
    return (
        <div>

            <div className="driversinfo_wrapper">
                <section className="driversinfo_container">

                    {/* SØGNING */}
                    <section className="soeg_container">
                        <div className="soeg_form">
                            <input ref={driversInputRef} className="soeg_input" type="search" placeholder="Search..." aria-label="Search" />
                            <button onClick={handleSoeg} className="soeg_btn" type="submit"> Søg </button>
                        </div>
                    </section>

                    <section className="driversinfo">
                        {driversListe}
                    </section>

                </section>
            </div>

        </div>
    )
}

export default DriversInfo
