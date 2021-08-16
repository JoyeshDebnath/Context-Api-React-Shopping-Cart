import React, { useState, useContext } from "react";
import faker from "faker";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Cart } from "../../Context/Context";

const Home = ({}) => {
	faker.seed(100); //avoid faker from generating random data everytime
	//generate random data with faker and create a array of such objects of random data
	const productsArray = [...Array(30)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.random.image(),
	}));

	// console.log(productsArray);

	const [products] = useState(productsArray);
	const { cart, setCart } = useContext(Cart);

	console.log("USECONTEXT", useContext(Cart));
	return (
		<div className="productContainer">
			{products.map((prod) => {
				return (
					<SingleProduct
						prod={prod}
						cart={cart}
						setCart={setCart}
						key={prod.id}
					/>
				);
			})}
		</div>
	);
};

export default Home;
