import React from "react";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<>
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/wallet">
							<Wallet />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
