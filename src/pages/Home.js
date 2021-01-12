import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import { Container, Button, Jumbotron } from "reactstrap";

const Home = () => {
	const [walletDetail, setWalletDetail] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/wallets/1").then((response) => {
			const { data } = response;
			// console.log(data);
			setWalletDetail(data);
		});
	}, []);

	return (
		<>
			<div className="header">
				<Container>
					<h5>{walletDetail.money}</h5>
					<h5>{walletDetail.wallet_name}</h5>
				</Container>
			</div>
		</>
	);
};

export default Home;
