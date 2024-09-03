/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainScreenCrousel() {

    return (
        <section class="main-slider" data-autoplay="true" data-interval="7000">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                centerMode={false}
                showThumbs={false}
                showIndicators={false}
                swipeable={true}
                emulateTouch={true}

            >
                <div className='top-slider-main'>
                    <img src="https://i.pinimg.com/originals/e9/3b/ff/e93bffb34b53272731ed2c27902e4c39.jpg" />
                    <div className='inner-crousel-right' data-aos="flip-up" data-aos-duration="2000">
                        <h1>Refined Grooming Mastery</h1>
                        <h4>The real place of Mindfullness & Healthy body</h4>
                        <div className='inner-button'>
                            <button>MORE DETAILS</button>
                        </div>
                    </div>
                </div>
                <div className='top-slider-main'>
                    <img src='https://lh5.googleusercontent.com/proxy/gvUbMHvg_v3qWqoporJLdAMBZMcRXsDJCqlkb1bARV_5PchANKsV_lJ1Pn7X_TPJpGeoKqR77f4IHsRv94rjJx6QH8BNONHNL9xQuS0E739fbrYdnmHbi_uFNzraYDWNL1p5=s0-d' />
                    <div className='inner-crousel-left' >
                        <h1>Most beautiful theme</h1>
                        <h4>Angel is a beautiful theme and easy to customize</h4>
                        <div className='inner-button'>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className='top-slider-main'>
                <img src="https://wallpaper-house.com/data/out/6/wallpaper2you_93644.jpg" /> 
                    <div className='inner-crousel-left' >
                        <h1>Welcome to Angel</h1>
                        <h4>The best place of Mindfullness & Healthy body</h4>
                        <div className='inner-button'>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className='top-slider-main'>
                <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/Fixing_his_jacket_web.jpg?v=1669844788" /> 
                    <div className='inner-crousel-left'>
                        <h1>Skin Care Solution</h1>
                        <h4>We provide best screen care & aging solution </h4>
                        <div className='inner-button'>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default MainScreenCrousel