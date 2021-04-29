import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../logo.svg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src={Logo} alt="logo image" />
			</div>
			<div className="navbar__links">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
