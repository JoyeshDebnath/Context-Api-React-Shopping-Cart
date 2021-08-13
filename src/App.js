import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/cart" exact component={Cart} />
			</div>
		</BrowserRouter>
	);
}

export default App;
