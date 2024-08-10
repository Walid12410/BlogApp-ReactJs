import React, { useState } from 'react';  // Import React first

import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";  // Fixed typo
import Navbar from "./NavBar";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <HeaderLeft toggle={toggle} setToggle={setToggle} />
            <Navbar toggle={toggle} setToggle={setToggle} />
            <HeaderRight />
        </header>
    );
}

export default Header;
