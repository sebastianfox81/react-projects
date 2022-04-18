import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {

  const [ isShowingLinks, setIsShowingLinks ] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight)
    if (isShowingLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [isShowingLinks])

  const showLinks = () => {
    setIsShowingLinks(!isShowingLinks)
    console.log(isShowingLinks)
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src='' alt="logo" /> */}
          <h3>Navbar</h3>
          <button className="nav-toggle" onClick={showLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <div key={id}>
                  <li>
                    <a href={url}>{text}</a>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <div key={id}>
                <a href={url}>
                  {icon}
                </a>
              </div>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
