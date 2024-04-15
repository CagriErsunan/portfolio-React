import React, { useRef, useState } from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

function NavBar() { 
    

    return <header>
        <div className='NavBar'>
            
            <svg className='LoGo' width="4rem" height="3rem" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_502_111)">
                <path d="M19.7059 49.868V45.5614H24.6765V48.3019H29.6471L29.6471 49.868L23.5295 53H17.4118L25.0589 49.868H19.7059Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5826 7.86931C39.069 8.36434 39.5416 8.84539 40 9.29825H11.7648L25.8824 23.2456L11.7648 37.193H40C39.5416 37.6458 39.069 38.1269 38.5826 38.6219C35.5774 41.6805 32.0481 45.2726 28.1197 46.0446C23.5555 46.9415 18.8245 46.4812 14.5251 44.7218C10.2256 42.9624 6.55085 39.9829 3.96541 36.1602C1.37999 32.3375 0 27.8432 0 23.2456C0 18.6481 1.37999 14.1538 3.96541 10.331C6.55085 6.50833 10.2256 3.52888 14.5251 1.76948C18.8245 0.0100718 23.5555 -0.450268 28.1197 0.446668C32.0481 1.21866 35.5774 4.8107 38.5826 7.86931ZM7.05892 37.193L21.1765 23.2456L7.05892 9.29825V37.193Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_i_502_111" x="0" y="0" width="40" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_502_111"/>
                </filter>
                </defs>
            </svg>
            <div className='goTo'>
                <Link activeClass="active" smooth spy to="home" className='locators'>HOME</Link>
                <Link activeClass="active" smooth spy to="About" className='locators'>ABOUT ME</Link>
                <Link activeClass="active" smooth spy to="workPage" className='locators'>WORK</Link>
                <Link activeClass="active" smooth spy to="exp" className='locators'>EXPERIENCE</Link>
                <Link activeClass="active" smooth spy to="contact" className='locators'>CONTACT</Link>
                <svg id='goToBorder' xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
                    <path d="M1 0.503906L1.20898 24" stroke="#F4DD62" stroke-width="1.5"/>
                </svg>
                <a className='pageMode'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.208984 12.2519C0.208984 5.76376 5.28117 0.504044 11.538 0.504044C12.3704 0.499708 13.2004 0.59751 14.0106 0.795411C10.8039 1.7475 8.70521 4.93207 9.01482 8.37601C9.32442 11.82 11.9546 14.5474 15.2758 14.8684C18.5969 15.1895 21.6679 13.0132 22.5861 9.68792C22.7769 10.5281 22.8712 11.3888 22.8671 12.2519C22.8671 18.7401 17.7949 23.9999 11.538 23.9999C5.28117 23.9999 0.208984 18.7401 0.208984 12.2519ZM9.81052 14.0423C6.87152 10.9975 6.44485 6.21213 8.79568 2.66016C4.37098 4.02288 1.49797 8.44587 1.94292 13.21C2.38786 17.974 6.02597 21.7431 10.6206 22.2001C15.2152 22.657 19.4778 19.6736 20.7878 15.084C17.3647 17.5251 12.7495 17.0871 9.81052 14.0423Z" fill="#F8FB52"/>
                </svg></a>
                <a className='pageMode'></a>
            </div>

        </div>
    </header>
 }

 export default NavBar;