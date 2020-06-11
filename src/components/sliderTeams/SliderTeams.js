import React, { useRef } from 'react';
import useSlider from './useSlider';
//npm install react-icons --save
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import './SliderTeams.scss';


function SliderTeams({ images }) {


    // Change slider images, titel, text
    const slideImage = useRef(null)
    const slideTitel = useRef(null)
    const slideText = useRef(null)
    const { switchToPreviousSlide, switchToNextSLide } = useSlider(slideImage, slideTitel, slideText, images)


    return (
        <div>

            <div className="sliderteams_wrapper">
                <section className="sliderteams_container" ref={slideImage}>
                    <div className="sliderteams_content">
                        <FaAngleLeft onClick={switchToPreviousSlide} className="pine_left" />

                        <div className="sliderteams">
                            {/* jsx-a11y/heading-has-content */}
                            <h2 ref={slideTitel} className="sliderteams_h2"> </h2>
                            <hr className="sliderteams_hr" />
                            <p ref={slideText} className="sliderteams_p"> </p>
                            <button className="sliderteams_btn">Read more</button>
                        </div>

                        <FaAngleRight onClick={switchToNextSLide} className="pine_right" />
                    </div>
                </section>
            </div>

        </div>
    );
}

export default SliderTeams
