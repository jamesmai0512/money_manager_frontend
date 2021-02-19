import React from "react";

const WalletButton = (props) => {
	const { item, setIdWallet } = props;

	return (
		<a
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
	);
};

export default WalletButton;
