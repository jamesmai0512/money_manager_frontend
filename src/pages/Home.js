import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import {
	Container,
	Button,
	Row,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
} from "reactstrap";

const Home = () => {
	const [walletDetail, setWalletDetail] = useState([]);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		axios.get("http://localhost:3001/wallets/1").then((response) => {
			const { data } = response;
			// console.log(data);
			setWalletDetail(data);
		});
	}, []);

	const toggle = () => setModal(!modal);

	return (
		<>
			<div>
				<div className="header">
					<Container>
						<Row>
							<div>
								<p className="home-wallet-name">{walletDetail.wallet_name}</p>
								<p className="home-wallet-amount">+$ {walletDetail.money}</p>
							</div>
							<div>
								<Button
									className="add-transaction"
									color="success"
									onClick={toggle}
								>
									ADD TRANSACTION
								</Button>
								<Modal isOpen={modal} toggle={toggle}>
									<ModalHeader toggle={toggle} className="modal-header">
										<p>Add Transaction</p>
									</ModalHeader>
									<ModalBody></ModalBody>
									<ModalFooter></ModalFooter>
								</Modal>
							</div>
						</Row>
					</Container>
				</div>

				<div>
					<Container className="transaction-detail">
						<div className="transaction-form">
							<div className="transaction-time">
								<a href="">LAST MONTH</a>
								<a href="">THIS MONTH</a>
								<a href="">FUTURE</a>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Home;
