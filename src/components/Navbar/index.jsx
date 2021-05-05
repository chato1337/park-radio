import React from "react";
import "./navbar.scss";
import Logo from "../../logo.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src={Logo} alt="logo image" />
			</div>
		</div>
	);
};

export default Navbar;
