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
	Input,
	Label,
} from "reactstrap";

const Home = () => {
	const [walletDetail, setWalletDetail] = useState([]);
	const [modal, setModal] = useState(false);
	const [isActive, setIsActive] = useState(true);

	function handleTextChange(text) {
		// setValue(text);

		if (text !== "") {
			setIsActive(true);
		} else {
			setIsActive(true);
		}
	}

	useEffect(() => {
		axios.get("http://localhost:3001/wallets/1").then((response) => {
			const { data } = response;
			// console.log(data);
			setWalletDetail(data);
		});
	}, []);
	const addTransaction = () => {};

	const toggleAddTransaction = () => setModal(!modal);

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
									onClick={toggleAddTransaction}
								>
									ADD TRANSACTION
								</Button>
								<Modal
									className="modal-transaction"
									isOpen={modal}
									toggle={toggleAddTransaction}
								>
									<ModalHeader
										toggle={toggleAddTransaction}
										className="modal-header"
									>
										<p>Add Transaction</p>
									</ModalHeader>
									<ModalBody className="modal-body-transaction">
										<Container>
											<Row>
												<div id="float-label-add-transaction">
													<Input
														className="input-add-transaction"
														onChange={(event) => {
															handleTextChange(event.target.value);
														}}
													/>
													<Label className={isActive ? "Active" : ""}>
														Wallet name
													</Label>
												</div>

												<div id="float-label-add-transaction">
													<Input className="input-add-transaction" />
													<Label className={isActive ? "Active" : ""}>
														Category
													</Label>
												</div>
												<div id="float-label-add-transaction">
													<Input className="input-add-transaction" />
													<Label className={isActive ? "Active" : ""}>
														Amount
													</Label>
												</div>
												<div id="float-label-add-transaction">
													<Input className="input-add-transaction" />
													<Label className={isActive ? "Active" : ""}>
														Date
													</Label>
												</div>
												<div id="float-label-add-transaction">
													<Input className="input-note-add-transaction" />
													<Label className={isActive ? "Active" : ""}>
														Note
													</Label>
												</div>
											</Row>
										</Container>
									</ModalBody>
									<ModalFooter>
										<Button color="secondary" onClick={toggleAddTransaction}>
											Cancel
										</Button>
										<Button color="success" onClick={addTransaction}>
											save
										</Button>
									</ModalFooter>
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
