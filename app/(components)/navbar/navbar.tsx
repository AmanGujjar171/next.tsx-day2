import React from 'react'
import Link from 'next/link'
import Blog from './../../blog/page';
import About from './../../about/page';
import Contact from './../../contact/page';

export default function Navbar() {
    return (
        <div>
            <nav id='navbar'>
                <a href="index.html" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </a>
                <div className="nav-links" id="navLinks">
                    {/* <!-- Reposnive bar open and close --> */}
                    <i className="fa fa-times"></i>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><Link href={"/course"}>Course</Link></li>
                        <li><Link href={"/blog"}>Blog</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars"></i>
                {/* <!-- Reposnive bar open and close --> */}
            </nav>
        </div>
    )
}
