import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DriveBanner from './DriveBanner';
import { hentUdvalgtDrivers } from '../helpers/DriversAPI';
import './Drivers.scss';

function Driver() {

    const { driverid } = useParams();

    //State
    const [drive, setDrive] = useState();


    useEffect(() => {
        hentUdvalgtDrivers(driverid).then(res => {
            setDrive(res);
        });
    }, [driverid]);

    console.log(drive)

    let theDrive = <h2>No drivers - something went wrong</h2>

    if (drive) {

        theDrive = (
            <div>
                <section className="driversinfo_card" key={drive._id}>
                    <section className="driversinfo_header">
                        <h5 className="driversinfo_h4"> {drive.name} </h5>
                        <hr className="driversinfo_hr" />
                        <p className="driversinfo_p"> <span className="driversinfo_span">Teams:</span> {drive.teams} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Conutry:</span> {drive.conutry} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Place of birth:</span> {drive.place} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Birthday:</span> {drive.birthday} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Podiums:</span> {drive.podiums} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Points:</span> {drive.points} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Grands Prix entered:</span> {drive.grandsprix} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">World Championships:</span> {drive.championships} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Highest race finish:</span> {drive.race} </p>
                        <p className="driversinfo_p"> <span className="driversinfo_span">Highest grid position:</span> {drive.gridposition} </p>
                    </section>

                    <section className="driversinfo_image">
                        <img className="driversinfo_img" src={"http://localhost:3007/images/" + drive.coverbillede.filnavn} alt="formula one drivers" />
                        <h2 className="driversinfo_h2"> {drive.number} </h2>
                    </section>
                </section>
            </div>
        )

    }
    else {
        return <h2> Ingen post </h2>
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
                        {theDrive}
                    </section>

                </section>
            </div>

        </div>
    )
}

export default Driver