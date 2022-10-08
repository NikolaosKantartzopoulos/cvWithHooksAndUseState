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
		};
		this.changeName = this.changeName.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changePhoneNumber = this.changePhoneNumber.bind(this);
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

	render() {
		return (
			<React.Fragment>
				<CategoryTitle title="General Information" />
				<div className="infoBlock">
					<label htmlFor="schoolNameID">Practical Experience</label>
					<input
						id="schoolNameID"
						type="text"
						value={this.state.companyName}
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
				</div>
			</React.Fragment>
		);
	}
}

export default GeneralInformation;
