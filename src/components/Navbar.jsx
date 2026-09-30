import React, { useState } from 'react';
import './Navbar.css';
import clinglogo from '../assets/clinglogo.webp';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <nav id="Nav">

            <div className="logo">
               
            <img src={clinglogo} alt='logo'/>
            </div>

            <div className="nav-links">

                <a className="active">Home</a>

                <div className="dropdown">
                    <div
                        className="dropdown-title"
                        onClick={() => toggleMenu("about")}
                    >
                        About Us
                        <span>{openMenu === "about" ? "⌃" : "⌄"}</span>
                    </div>

                    {openMenu === "about" && (
                        <div className="dropdown-menu">
                            <div>👥 &nbsp; Team</div>
                            <div>🏆 &nbsp; Achievements</div>
                            <div>🎓 &nbsp; Career</div>
                        </div>
                    )}
                </div>

                <div className="dropdown">
                    <div
                        className="dropdown-title"
                        onClick={() => toggleMenu("services")}
                    >
                        Services
                        <span>{openMenu === "services" ? "⌃" : "⌄"}</span>
                    </div>

                    {openMenu === "services" && (
                        <div className="dropdown-menu">
                            <div>💻 &nbsp; Services</div>
                            <div>🤖 &nbsp; AI/ML</div>
                            <div>🎥 &nbsp; 3D Videos</div>
                        </div>
                    )}
                </div>

                <div className="dropdown">
                    <div
                        className="dropdown-title"
                        onClick={() => toggleMenu("solutions")}
                    >
                        Solutions
                        <span>{openMenu === "solutions" ? "⌃" : "⌄"}</span>
                    </div>

                    {openMenu === "solutions" && (
                        <div className="dropdown-menu">
                            <div>📦 &nbsp; Our Products</div>
                            <div>🌐 &nbsp; Domains We Serve</div>
                            <div>💼 &nbsp; Career</div>
                        </div>
                    )}
                </div>

                <div className="dropdown">
                    <div
                        className="dropdown-title"
                        onClick={() => toggleMenu("resources")}
                    >
                        Resources
                        <span>{openMenu === "resources" ? "⌃" : "⌄"}</span>
                    </div>

                    {openMenu === "resources" && (
                        <div className="dropdown-menu">
                            <div>📁 &nbsp; Portfolio</div>
                            <div>📝 &nbsp; Blog</div>
                            <div>📚 &nbsp; Case Studies</div>
                        </div>
                    )}
                </div>

                <a>Clients</a>

            </div>

        </nav>
    );
}

export default Navbar;