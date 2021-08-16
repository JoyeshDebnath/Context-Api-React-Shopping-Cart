import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/cart" exact>
					<Cart />
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
