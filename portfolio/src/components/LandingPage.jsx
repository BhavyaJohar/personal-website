import React from "react";
import { HeroParallax } from "./ui/HeroParallax.jsx"; // Make sure the path is correct
import image1 from '../assets/LandingPage/Track.jpeg';
import image2 from '../assets/LandingPage/Boston.jpeg';
import image3 from '../assets/LandingPage/Execs.jpeg';
import image4 from '../assets/LandingPage/Akima.jpeg';
import image5 from '../assets/LandingPage/Debate.jpeg';

export function LandingPage() {
    return <HeroParallax products={products} />;
}

// Products array with images and links
export const products = [
    {
        thumbnail: image5,
    },
    {
        thumbnail: image3,
    },
    {
        thumbnail: image4,
    },
    {
        thumbnail: image1,
    },
    {
        thumbnail: image2,
    },
];
