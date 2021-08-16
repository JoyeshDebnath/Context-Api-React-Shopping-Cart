import React, { useState, useContext } from "react";
import "../style.css";
import { Cart } from "../../Context/Context";
const SingleProduct = ({ prod }) => {
	const { cart, setCart } = useContext(Cart);

	return (
		<div className="products">
			<img src={prod.image} alt={prod.name} />
			<div className="productDesc">
				<span style={{ fontWeight: 700 }}>{prod.name}</span>
				<span>₹ {prod.price.substring(0, 3)}</span>
			</div>
			{cart.includes(prod) ? (
				<button
					className="add➕"
					onClick={() => {
						setCart(cart.filter((c) => c.id !== prod.id));
					}}
				>
					REMOVE❌
				</button>
			) : (
				<button
					className="add"
					onClick={() => {
						setCart([...cart, prod]);
					}}
				>
					ADD
				</button>
			)}
		</div>
	);
};

export default SingleProduct;
