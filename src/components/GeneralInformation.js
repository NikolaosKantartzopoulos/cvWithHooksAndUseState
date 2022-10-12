import React, { Component, useState } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";

function GeneralInformation(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [editCategory, setEditCategory] = useState(false);

	const changeName = (event) => {
		console.log("changeName called");
		setName(event.target.value);
	};
	const changeEmail = (event) => {
		console.log("changeEmail called");
		setEmail(event.target.value);
	};
	const changePhoneNumber = (event) => {
		console.log("changePhoneNumber called");
		setPhoneNumber(event.target.value);
	};
	const submitGeneralInformation = () => {
		console.log("submitGeneralInformation called");
		setEditCategory(false);
	};
	const editGeneralInformation = () => {
		console.log("editGeneralInformation called");
		setEditCategory(true);
	};

	if (editCategory) {
		return (
			<React.Fragment>
				<CategoryTitle
					title="General Information"
					editCategory={editGeneralInformation}
				/>
				<form className="infoBlock" onSubmit={submitGeneralInformation}>
					<label htmlFor="nameID">Name</label>
					<input id="nameID" type="text" value={name} onChange={changeName} />
					<label htmlFor="changeEmailID">E-mail</label>
					<input
						id="changeEmailID"
						type="text"
						value={email}
						onChange={changeEmail}
					/>
					<label htmlFor="changePhoneNumberID">Phone Number</label>
					<input
						id="changePhoneNumberID"
						type="text"
						value={phoneNumber}
						onChange={changePhoneNumber}
					/>
					<button type="submit">Submit</button>
				</form>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<CategoryTitle
					title="General Information"
					editCategory={editGeneralInformation}
				/>
				<div className="infoBlock">
					<div>Name</div>
					<div onClick={editGeneralInformation}>{name}</div>
					<div>E-mail</div>
					<div onClick={editGeneralInformation}>{email}</div>
					<div>Phone Number</div>
					<div onClick={editGeneralInformation}>{phoneNumber}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default GeneralInformation;
