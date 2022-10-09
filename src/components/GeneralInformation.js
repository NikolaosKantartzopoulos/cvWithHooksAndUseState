import React, { Component } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";

class GeneralInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			phoneNumber: "",
			editCategory: false,
		};
		this.changeName = this.changeName.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changePhoneNumber = this.changePhoneNumber.bind(this);
		this.submitGeneralInformation = this.submitGeneralInformation.bind(this);
		this.editGeneralInformation = this.editGeneralInformation.bind(this);
	}

	changeName(event) {
		console.log("changeName called");
		this.setState({ name: event.target.value });
	}
	changeEmail(event) {
		console.log("changeEmail called");
		this.setState({ email: event.target.value });
	}
	changePhoneNumber(event) {
		console.log("changePhoneNumber called");
		this.setState({ phoneNumber: event.target.value });
	}
	submitGeneralInformation() {
		console.log("submitGeneralInformation called");
		this.setState({ editCategory: false });
	}
	editGeneralInformation() {
		console.log("editGeneralInformation called");
		this.setState({ editCategory: true });
	}

	render() {
		if (this.state.editCategory) {
			return (
				<React.Fragment>
					<CategoryTitle
						title="General Information"
						editCategory={this.editGeneralInformation}
					/>
					<form className="infoBlock" onSubmit={this.submitGeneralInformation}>
						<label htmlFor="nameID">Name</label>
						<input
							id="nameID"
							type="text"
							value={this.state.name}
							onChange={this.changeName}
						/>
						<label htmlFor="changeEmailID">E-mail</label>
						<input
							id="changeEmailID"
							type="text"
							value={this.state.email}
							onChange={this.changeEmail}
						/>
						<label htmlFor="changePhoneNumberID">Phone Number</label>
						<input
							id="changePhoneNumberID"
							type="text"
							value={this.state.phoneNumber}
							onChange={this.changePhoneNumber}
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
						editCategory={this.editGeneralInformation}
					/>
					<div className="infoBlock">
						<div>Name</div>
						<div onClick={this.editGeneralInformation}>{this.state.name}</div>
						<div>E-mail</div>
						<div onClick={this.editGeneralInformation}>{this.state.email}</div>
						<div>Phone Number</div>
						<div onClick={this.editGeneralInformation}>
							{this.state.phoneNumber}
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
}

export default GeneralInformation;
