import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Logo from "../../logo.svg";

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleClick = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src={Logo} alt="logo image" />
			</div>
			<button type="button" onClick={handleClick}>
				{darkMode ? "Dark Mode" : "Light Mode"}
			</button>
		</div>
	);
};

export default Navbar;
