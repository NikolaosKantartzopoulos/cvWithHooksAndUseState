import React, { Component } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";

class EducationalExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			schoolName: "",
			titleOfStudy: "",
			dateOfStudy: "",
		};
		this.changeSchoolName = this.changeSchoolName.bind(this);
		this.changeTitleOfStudy = this.changeTitleOfStudy.bind(this);
		this.changeDateOfStudy = this.changeDateOfStudy.bind(this);
	}

	changeSchoolName(event) {
		console.log("changeSchoolName called");
	}
	changeTitleOfStudy(event) {
		console.log("changeTitleOfStudy called");
	}
	changeDateOfStudy(event) {
		console.log("changeDateOfStudy called");
	}

	render() {
		return (
			<React.Fragment>
				<CategoryTitle title="Educational Experience" />
				<div className="infoBlock">
					<label htmlFor="schoolNameID">School Name</label>
					<input
						id="schoolNameID"
						type="text"
						value={this.state.companyName}
						onChange={this.changeSchoolName}
					/>
					<label htmlFor="changeTitleOfStudyID">Title of Study</label>
					<input
						id="changeTitleOfStudyID"
						type="text"
						value={this.state.changeTitleOfStudy}
						onChange={this.changeTitleOfStudy}
					/>
					<label htmlFor="changeDateOfStudyID">Date of Study</label>
					<input
						id="changeDateOfStudyID"
						type="text"
						value={this.state.changeDateOfStudy}
						onChange={this.changeDateOfStudy}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default EducationalExperience;
