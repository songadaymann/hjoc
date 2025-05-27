'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link'; // For Next.js navigation

const slidesData = [
    {
        img: '/poem/poem1.png',
        text: `If you don\'t feel Jewish enough. <br/>
               If you feel too Jewish. <br/>
               Not the right kind of Jewish. <br/>
               If you aren\'t Jewish, but love Judaism and Jews. <br/>
               If this is your first time coming to a Jewish gathering. <br/>
               If you\'ve been going to services all your life. <br/>
               If you haven\'t been to services in years. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem2.png',
        text: `If you are ready for revolution. <br/>
               If you are out protesting. <br/>
               If you are supporting the movement with your labor, care, and love. <br/>
               If you are organizing. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem3.png',
        text: `If you are not sure what to do. <br/>
               If you are seeking to be in the right relationship with the community around you. <br/>
               If you are grappling and figuring it out. <br/>
               If you are taking steps to dismantle white supremacy, and messing up. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem4.png',
        text: `If you don\'t know if you believe in God or what that means. <br/>
               If you are curious about exploring new names and pronouns and infinite genders of the Divine. <br/>
               If you feel like you don\'t know how to pray, if the only thing you feel like you can do is pray. <br/>
               If you are homesick for something and long for spiritual practice. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem5.png',
        text: `If Zionism has kept you away from Judaism. <br/>
               If talking about Israel and Palestine is breaking your family or friend circles apart. <br/>
               If you don\'t talk about Israel and Palestine in your family. <br/>
               If you\'ve been waiting your whole life for someone to say the words apartheid, occupation, and Palestine during Jewish ritual. <br/>
               If you long for Jewish communities and ritual spaces that are grounded in and in service to collective liberation. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem6.png',
        text: `If your people spoke in languages your bones and tongue and ear remember and long for. <br/>
               If you have felt the pain of racism within Jewish communities and the pain of silence about racism within and from Jewish communities. <br/>
               <strong>HINENI</strong>`
    },
    {
        img: '/poem/poem7.png',
        text: `If you have been longing, dreaming, and waiting for non-zionist, radically inclusive, queer, sweet, traditional, non-traditional, Jewish space to go deep, sing, eat, remember, play, make mistakes, heal, and pray in. <br/>
               <strong>HINENI</strong>`
    }
];

export default function HineiniPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = null; // Placeholder, useRouter would be used if navigation was more complex

    const handlePrev = () => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        if (currentSlide < slidesData.length - 1) {
            setCurrentSlide(prev => prev + 1);
        } else {
            // Navigate to home page - In Next.js, this would typically be done with useRouter or <Link>
            window.location.href = '/'; 
        }
    };

    const slide = slidesData[currentSlide];
    const isReverse = currentSlide % 2 === 1;

    return (
        <>
            <Head>
                <title>HINENI – Poem</title>
                {/* Font link ideally in layout.tsx or via next/font */}
                <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&display=swap" rel="stylesheet" />
            </Head>

            {/* Home button - using Next.js Link component */}
            <div id="top-bar">
                <Link href="/">&larr; Home</Link>
            </div>

            <div id="slide-container">
                <div className={`slide-content ${isReverse ? 'reverse' : ''}`}>
                    <div className="slide-text" dangerouslySetInnerHTML={{ __html: slide.text }}></div>
                    <img src={slide.img} alt={`Poem image ${currentSlide + 1}`} className="slide-image" />
                </div>
            </div>

            {/* Bottom navigation */}
            <div id="bottom-nav">
                <button id="prev-btn" onClick={handlePrev} disabled={currentSlide === 0}>
                    &larr; Back
                </button>
                <span id="credit" style={{ 
                    visibility: currentSlide === slidesData.length - 1 ? 'visible' : 'hidden',
                    flex: 1, 
                    textAlign: 'center' 
                }} 
                dangerouslySetInnerHTML={{ __html: currentSlide === slidesData.length - 1 ? 'HINENU : WE ARE HERE<br/>by Dori Midnight of Nishmat Shoom in Northampton MA, edited by our friends at Mending Minyan' : '' }}>
                </span>
                <button id="next-btn" onClick={handleNext}>
                    {currentSlide === slidesData.length - 1 ? 'Home \u2192' : 'Next \u2192'}
                </button>
            </div>
        </>
    );
} 