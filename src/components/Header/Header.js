import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
	return (
		<div>
			<span className="header">Context-API✨✨</span>
			<ul className="nav">
				<li>
					<Link to="/home">Home Page🐱‍🏍</Link>
				</li>
				<li>
					<Link to="/cart">Cart Page 🛒</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
