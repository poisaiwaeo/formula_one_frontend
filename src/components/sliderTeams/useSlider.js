import { useEffect } from 'react'

const useSlider = (slideImage, slideTitel, slideText, images) => {
    let slideCounter = 0;

    useEffect(() => startSlider())

    const startSlider =() => {
        slideImage.current.style.backgroundImage = `url(${images[0].image})`;
            slideTitel.current.innerHTML = images[0].titel;
            slideText.current.innerHTML = images[0].text;
    }

    const handleSlide = (slide) => {
        slideImage.current.style.backgroundImage = `url(${images[slide - 1].image})`;
          slideTitel.current.innerHTML = images[slide - 1].titel;
          slideText.current.innerHTML = images[slide - 1].text;
         animateSlide(slideImage)
    }

    const animateSlide = () => {
        slideImage.current.classList.add('fadeIn');
        setTimeout(() => {
          slideImage.current.classList.remove('fadeIn');
        }, 700);
    }
    
    const switchToPreviousSlide = () => {
        if (slideCounter === 0) {
            handleSlide(images.length)
            slideCounter = images.length;
          }
        
        handleSlide(slideCounter)         
        slideCounter--;
    }

    const switchToNextSLide = () => {
      if (slideCounter === images.length - 1) {
        startSlider()
        slideCounter = -1;
        animateSlide(slideImage)
      }

      slideImage.current.style.backgroundImage = `url(${images[slideCounter + 1].image})`;
      slideTitel.current.innerHTML = images[slideCounter + 1].titel;
      slideText.current.innerHTML = images[slideCounter + 1].text;
      slideCounter++;
      animateSlide(slideImage)
    }

    return { switchToPreviousSlide, switchToNextSLide }
}

export default  useSlider