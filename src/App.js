import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
	const [cart, setCart] = useState([]);
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Route path="/" exact>
					<Home cart={cart} setCart={setCart} />
				</Route>
				<Route path="/cart" exact>
					<Cart cart={cart} setCart={setCart} />
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
