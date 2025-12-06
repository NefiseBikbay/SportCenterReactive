import { useEffect, useRef } from "react";

import logo from "../assets/img/logo.png";
function Header() {
  const navRef = useRef(null);
  // Mobile Nav
  const mobileNavRef = useRef(null);
  const mobileIconRef = useRef(null);
  const navListRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const nav = navRef.current;
      const mobileNav = mobileNavRef.current;

      if (!nav || !mobileNav) return;

      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle
  useEffect(() => {
    const icon = mobileIconRef.current;
    const navList = navListRef.current;

    if (!icon || !navList) return;

    const toggleMenu = () => {
      navList.classList.toggle("active");
    };

    icon.addEventListener("click", toggleMenu);

    return () => icon.removeEventListener("click", toggleMenu);
  }, []);
  return (
    <header id="header">
      {/* Navigation Start */}
      <div className="navigation" ref={navRef}>
        <div className="container header-container">
          <a href="#header" className="logo">
            <img src={logo} alt="sport center logo" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#trainers">Trainer</a>
              </li>
              <li>
                <a href="#review">Review</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button>JOIN US</button>
          </nav>
        </div>
      </div>
      {/* Navigation End */}
      {/* Mobile Navigation Start */}
      <div className="mobile-nav" ref={mobileNavRef}>
        <div className="nav-top">
          <a href="#home" className="logo">
            <img src={logo} alt="sport center logo" />
          </a>
          <i className="bi bi-list" ref={mobileIconRef}></i>
        </div>

        <nav className="nav-list active" ref={navListRef}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#classes">Classes</a>
            </li>
            <li>
              <a href="#trainers">Trainer</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button>JOIN US</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation End */}
      {/* Hero Start */}
      <div className="container header-hero" id="hero">
        <button>POWERFULL</button>
        <h1>
          Group <br />
          Practice <br />
          With Trainer
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam
          exercitationem laudantium illum. Id, laborum? Totam, dicta nisi.
          Voluptates, vero id. Perferendis.
        </p>
        <div className="header-hero-buttons">
          <button>Sign Up</button>
          <button>Details</button>
        </div>
      </div>
      {/* Hero End */}
    </header>
  );
}
export default Header;
