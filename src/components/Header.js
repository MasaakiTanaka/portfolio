import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link activeClass="active" to="main" onClick={toggleNav} smooth={true} class="menu-link">Home</Link>
                    <Link to="about" smooth={true} onClick={toggleNav} class="menu-link">About me</Link>
                    <Link to="projects" smooth={true} onClick={toggleNav} class="menu-link">Projects</Link>
                    <Link to="skills" smooth={true} onClick={toggleNav} class="menu-link">Skills</Link>
                    <Link to="experience" smooth={true} onClick={toggleNav} class="menu-link">Experience</Link>
                </nav>
            </CSSTransition>
            {/* <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button> */}
        </header>
    );
}