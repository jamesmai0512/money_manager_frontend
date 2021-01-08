import React from "react";
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
					</Switch>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
