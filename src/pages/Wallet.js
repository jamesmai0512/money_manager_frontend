import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
	Container,
	Button,
	Col,
	Row,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Label,
} from "reactstrap";
import "../styles/Wallet.css";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const Wallet = () => {
	const [wallet, setWallet] = useState([]);
	const [walletDetail, setWalletDetail] = useState([]);
	const [isActive, setIsActive] = useState(true);
	const [createModal, setCreateModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [idWallet, setIdWallet] = useState([]);
	const [newWalletName, setNewWalletName] = useState({
		wallet_name: "",
		money: "",
	});
	const [editWallet, setEditWallet] = useState({
		wallet_name: "",
		money: "",
	});
	const [value, setValue] = useState("");

	function handleTextChange(text) {
		setValue(text);

		if (text !== "") {
			setIsActive(true);
		} else {
			setIsActive(true);
		}
	}

	const refreshPage = () => {
		window.location.reload(false);
	};

	const listOfWallet = wallet.map((item) => (
		<a
			key={item.id}
			onClick={() => {
				const id = item.id;
				setIdWallet(id);
				// refreshPage();
			}}
		>
			<div className="wallet-form">
				<div className="include-text">
					<h9>Included in Total</h9>
				</div>
				<div className="wallet-total">
					<div className="wallet-name">
						<p>{item.wallet_name}</p>
					</div>
					<div className="wallet-money">
						<p>+$ {item.money}</p>
					</div>
				</div>
			</div>
		</a>
	));

	const toggleAddWallet = () => setCreateModal(!createModal);
	const toggleEditWallet = () => setEditModal(!editModal);

	useEffect(() => {
		axios.get(`http://localhost:3001/wallets/${idWallet}`).then((response) => {
			const { data } = response;
			// console.log(data);
			setWalletDetail(data);
			setEditWallet(data);
		});
	}, []);

	useEffect(() => {
		axios.get(`http://localhost:3001/wallets/`).then((response) => {
			const { data } = response;
			setWallet(data);
		});
	}, []);

	const createWallet = () => {
		const { wallet_name, money } = newWalletName;
		const newData = { wallet_name: wallet_name, money: money };

		axios.post("http://localhost:3001/wallets", newData).then((response) => {
			if (response.status === 201) {
				toggleAddWallet();
				//will be have alert success
			}
		});
	};

	const updateWallet = () => {
		const { wallet_name, money } = editWallet;
		const editData = { wallet_name: wallet_name, money: money };

		axios.put("http://localhost:3001/wallets/3", editData).then((response) => {
			if (response.status === 201) {
				toggleEditWallet();
				//will be have alert update success
			}
		});
	};

	return (
		<>
			<div>
				<div className="wallet-header">
					<Container className="wallet-header-container">
						<div className="header-title">
							<a className="back-button" href="">
								<BiArrowBack />
							</a>

							<h4>Wallets</h4>
						</div>
					</Container>
				</div>

				<Container className="wallet-detail-container">
					<Row>
						<Col md="5">
							{/* <a href={``}>
								<div className="wallet-form">
									<div className="include-text">
										<h9>Included in Total</h9>
									</div>
									<div className="wallet-total">
										<div className="wallet-name">
											<p>{walletDetail.wallet_name}</p>
										</div>
										<div className="wallet-money">
											<p>+$ {walletDetail.money}</p>
										</div>
									</div>
								</div>
							</a> */}

							{listOfWallet}

							<div className="wrap-add-wallet">
								<Button
									className="add-wallet"
									color="success"
									onClick={() => {
										toggleAddWallet();
									}}
								>
									ADD WALLET
								</Button>

								<Modal isOpen={createModal} toggle={toggleAddWallet}>
									<ModalHeader toggle={toggleAddWallet}>Add Wallet</ModalHeader>
									<ModalBody>
										<div id="float-label">
											<Input
												type="string"
												onChange={(event) => {
													setNewWalletName({
														...newWalletName,
														wallet_name: event.target.value,
													});
													handleTextChange(event.target.value);
												}}
											/>
											<Label className={isActive ? "Active" : ""}>
												Wallet name
											</Label>
										</div>

										<br />
										<div id="float-label">
											<Input
												type="integer"
												onChange={(event) => {
													setNewWalletName({
														...newWalletName,
														money: event.target.value,
													});
												}}
											/>
											<Label className={isActive ? "Active" : ""}>Money</Label>
										</div>
									</ModalBody>
									<ModalFooter>
										<Button color="secondary" onClick={toggleAddWallet}>
											Cancel
										</Button>
										<Button color="success" onClick={createWallet}>
											Create Wallet
										</Button>
									</ModalFooter>
								</Modal>
							</div>
						</Col>

						<Col md="7">
							<div className="wallet-detail">
								<div className="wallet-detail-header">
									<Row>
										<h5 className="wallet-detail-title">Wallet Detail</h5>
										<Button
											className="edit-wallet-button"
											outline
											color="success"
											onClick={toggleEditWallet}
										>
											Edit
										</Button>

										<Modal isOpen={editModal} toggle={toggleEditWallet}>
											<ModalHeader>Edit wallet</ModalHeader>
											<ModalBody>
												<div id="float-label">
													<Input
														type="string"
														// placeholder={walletDetail.wallet_name}
														value={editWallet.wallet_name}
														onChange={(event) => {
															setEditWallet({
																...editWallet,
																wallet_name: event.target.value,
															});
															handleTextChange(event.target.value);
														}}
													/>
													<Label className={isActive ? "Active" : ""}>
														Wallet name
													</Label>
												</div>
												<br />
												<div id="float-label">
													<Input
														type="integer"
														value={editWallet.money}
														onChange={(event) => {
															setEditWallet({
																...editWallet,
																money: event.target.value,
															});
														}}
													/>
													<Label className={isActive ? "Active" : ""}>
														Initial balance
													</Label>
												</div>
											</ModalBody>
											<ModalFooter>
												<Button color="secondary" onClick={toggleEditWallet}>
													Cancel
												</Button>
												<Button color="success" onClick={updateWallet}>
													Save
												</Button>
											</ModalFooter>
										</Modal>
									</Row>
								</div>
								<div className="wallet-detail-name">
									<h3>{walletDetail.wallet_name}</h3>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Wallet;
