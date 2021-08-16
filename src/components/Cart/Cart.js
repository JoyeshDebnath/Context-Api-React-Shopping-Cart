import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Cart } from "../../Context/Context";
const _Cart = ({}) => {
	const [Total, setTotal] = useState();
	const { cart, setCart } = useContext(Cart);
	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
	}, [cart]);

	return (
		<div>
			<span style={{ fontSize: 30 }}>MY CARTLIST📃</span>
			<br />
			<br />
			<span style={{ fontSize: 40 }}>TOTAL BILL💳💷:RS.{Total} </span>

			<div className="productContainer">
				{cart.map((product) => {
					return <SingleProduct prod={product} cart={cart} setCart={setCart} />;
				})}
			</div>
		</div>
	);
};

export default _Cart;
