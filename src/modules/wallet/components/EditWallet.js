// import React from "react";
// import {
// 	Container,
// 	Button,
// 	Col,
// 	Row,
// 	Modal,
// 	ModalHeader,
// 	ModalBody,
// 	ModalFooter,
// 	Input,
// 	Label,
// } from "reactstrap";

// const EditWallet = () => {
//   return (
//     <Button
//       className="edit-wallet-button"
//       outline
//       color="success"
//       onClick={toggleEditWallet}
//     >
//       Edit
//     </Button>

//     <Modal isOpen={editModal} toggle={toggleEditWallet}>
//       <ModalHeader>Edit wallet</ModalHeader>
//       <ModalBody>
//         <div id="float-label">
//           <Input
//             type="string"
//             // placeholder={walletDetail.wallet_name}
//             value={editWallet.wallet_name}
//             onChange={(event) => {
//               setEditWallet({
//                 ...editWallet,
//                 wallet_name: event.target.value,
//               });
//               handleTextChange(event.target.value);
//             }}
//           />
//           <Label className={isActive ? "Active" : ""}>
//             Wallet name
//           </Label>
//         </div>
//         <br />
//         <div id="float-label">
//           <Input
//             type="integer"
//             value={editWallet.money}
//             onChange={(event) => {
//               setEditWallet({
//                 ...editWallet,
//                 money: event.target.value,
//               });
//             }}
//           />
//           <Label className={isActive ? "Active" : ""}>
//             Initial balance
//           </Label>
//         </div>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="secondary" onClick={toggleEditWallet}>
//           Cancel
//         </Button>
//         <Button color="success" onClick={updateWallet}>
//           Save
//         </Button>
//       </ModalFooter>
//     </Modal>
//    );
// }

// export default EditWallet;
