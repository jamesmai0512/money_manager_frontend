import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Button } from "reactstrap";
import "../styles/Wallet.css";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const Wallet = () => {
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
			<div className="wallet">
				<div className="wallet-header">
					<Container className="wallet-header-container">
						<div className="header-title">
							<a href=""></a>
							<h5>
								<BiArrowBack />
							</h5>
							<h5>Wallets</h5>
							<div className="wrap-add-wallet">
								<Button className="add-wallet" color="success">
									ADD WALLET
								</Button>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Wallet;
