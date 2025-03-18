import React from 'react';
import hero_image from '../../assets/your-image.png';  // Path to the image

const Hero = () => {
    return (
        <div
            className="hero"
            style={{
                background: `url(${hero_image}) no-repeat center center/cover`,
                height: '100vh'  // Make sure the height is 100% of the viewport height
            }}
        >
            <div className="hero-content">
                <h1>Welcome to Our Store!</h1>
                <p>Explore our amazing products.</p>
            </div>
        </div>
    );
};

export default Hero;
