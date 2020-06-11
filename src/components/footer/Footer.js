import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../images/footer_logo.png';
import './Footer.scss';

function Footer() {
    return (
        <div>

            <div className="footer_wrapper">
                <footer className="footer_container">
                    <section className="footer_logo">
                        <Link to="/">
                            <div className="logo">
                                <img src={FooterLogo} alt="Logo" />
                            </div>
                        </Link>
                    </section>

                    <div className="footer_nav">
                        <ul className="footernav_menu">
                            <li>
                                <Link className="footernav_link" to="/"> Home </Link>
                            </li>
                            <li>
                                <Link className="footernav_link" to="/teams"> Teams </Link>
                            </li>
                            <li>
                                <Link className="footernav_link" to="/drivers"> Drivers </Link>
                            </li>
                            <li>
                                <Link className="footernav_link" to="/calendar"> Calendar </Link>
                            </li>
                            <li>
                                <Link className="footernav_link" to="/cartechnical"> Cartechnical </Link>
                            </li>
                            <li>
                                <Link className="footernav_link" to="/fia"> FIA </Link>
                            </li>
                        </ul>
                    </div>

                    <hr className="footer_hr" />

                    <div className="footer_copyright">
                        <p className="footer_p">&copy; 2020 Formula One World Championship Limited | Poi Saiwaeo & Maja Olesen</p>
                    </div>

                </footer>
            </div>

        </div>
    )
}

export default Footer
