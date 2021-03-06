import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
	return (
		<>
			<span
				className="header"
				style={{
					backgroundColor: "#240046",
					fontSize: "2rem",
					color: "#fdfffc",
					padding: "1rem",
				}}
			>
				Context-API-Shopping-Cart
			</span>
			<hr />
			<ul className="nav">
				<li>
					<Link
						to="/"
						style={{ textDecoration: "none", fontSize: "2rem", color: "white" }}
					>
						Home Pageð±âð
					</Link>
				</li>
				<li>
					<Link
						to="/cart"
						style={{ textDecoration: "none", fontSize: "2rem", color: "white" }}
					>
						Cart Page ð
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Header;
