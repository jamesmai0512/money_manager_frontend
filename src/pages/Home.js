import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
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
	const [wallet, setWallet] = useState([]);
	const [category, setCategory] = useState([]);

	const [modalTransaction, setModalTransaction] = useState(false);
	const [modalCategory, setModalCategory] = useState(false);
	const [modalWallet, setModalWallet] = useState(false);
	const [isActive, setIsActive] = useState(true);
	const [date, setDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [transactionValue, setTransactionValue] = useState({
		transaction_money: "",
		note: "",
		category: "",
		date: "",
		wallet_name: "",
	});

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
	const addTransaction = () => {
		const {
			transactions_money,
			note,
			category,
			date,
			wallet_name,
		} = transactionValue;

		const data = {
			transaction_money: transactions_money,
			note: note,
			category: category,
			date: date,
			wallet_name: wallet_name,
		};

		axios
			.post(`http://localhost:3001/transactions`, { data })
			.then((response) => {
				console.log(response);
				console.log(response.data);
			});
	};

	const toggleAddTransaction = () => setModalTransaction(!modalTransaction);
	const toggleCategory = () => setModalCategory(!modalCategory);
	const toggleWallet = () => setModalWallet(!modalWallet);

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
								<DatePicker
									selected={date}
									onChange={(date) => setDate(date)}
								/>
								<Modal
									className="modal-transaction"
									isOpen={modalTransaction}
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
														onClick={() => {
															toggleWallet();
														}}
														value={walletDetail.wallet_name}
														onChange={(event) => {
															setTransactionValue({
																...transactionValue,
																wallet_name: walletDetail.wallet_name,
															});
														}}
													/>
													<Label className={isActive ? "Active" : ""}>
														Wallet
													</Label>
													<Modal isOpen={modalWallet} toggle={toggleWallet}>
														<ModalHeader>Select Wallet</ModalHeader>
														<ModalBody className="wallet-modal">
															<div className="modal-wallet-form">
																<div className="modal-include-text">
																	<h9>Included in Total</h9>
																</div>
																<div className="modal-wallet-name">
																	<p>{walletDetail.wallet_name}</p>
																</div>
																<div className="modal-wallet-money">
																	<p>+$ {walletDetail.money}</p>
																</div>
															</div>
														</ModalBody>
													</Modal>
												</div>

												<div id="float-label-add-transaction">
													<Input
														className="input-add-transaction"
														placeholder="Type category"
														onChange={(event) => {
															setTransactionValue({
																...transactionValue,
																category: event.target.value,
															});
														}}
													/>
													<Label className={isActive ? "Active" : ""}>
														Category
													</Label>
												</div>
												<div id="float-label-add-transaction">
													<Input
														placeholder="0"
														onChange={(event) => {
															setTransactionValue({
																...transactionValue,
																transaction_money: event.target.value,
															});
														}}
														className="input-add-transaction"
													/>
													<Label className={isActive ? "Active" : ""}>
														Amount
													</Label>
												</div>
												<div id="float-label-add-transaction">
													{/* <Input
														onChange={(event) => {
															setTransactionValue({
																...transactionValue,
																note: event.target.value,
															});
														}}
														className="input-add-transaction"
													/> */}
													<DatePicker
														selected={startDate}
														onChange={(date) => setStartDate(date)}
													/>
													<Label className={isActive ? "Active" : ""}>
														Date
													</Label>
												</div>
												<div id="float-label-add-transaction">
													<Input
														placeholder="Note"
														onChange={(event) => {
															setTransactionValue({
																...transactionValue,
																note: event.target.value,
															});
														}}
														className="input-note-add-transaction"
													/>
													<Label className={isActive ? "Active" : ""}>
														Note
													</Label>
												</div>
											</Row>
										</Container>
									</ModalBody>
									<ModalFooter>
										<Button
											color="secondary"
											outline
											color="success"
											onClick={toggleAddTransaction}
										>
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
