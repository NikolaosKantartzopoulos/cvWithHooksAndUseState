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
			editCategory: false,
		};
		this.changeSchoolName = this.changeSchoolName.bind(this);
		this.changeTitleOfStudy = this.changeTitleOfStudy.bind(this);
		this.changeDateOfStudy = this.changeDateOfStudy.bind(this);
		this.submitEducationalExperience =
			this.submitEducationalExperience.bind(this);
		this.editEducationalExperience = this.editEducationalExperience.bind(this);
	}

	changeSchoolName(event) {
		console.log("changeSchoolName called");
		this.setState({ schoolName: event.target.value });
	}
	changeTitleOfStudy(event) {
		console.log("changeTitleOfStudy called");
		this.setState({ titleOfStudy: event.target.value });
	}
	changeDateOfStudy(event) {
		console.log("changeDateOfStudy called");
		this.setState({ dateOfStudy: event.target.value });
	}
	submitEducationalExperience() {
		console.log("submitEducationalExperience called");
		this.setState({ editCategory: false });
	}
	editEducationalExperience() {
		console.log("editEducationalExperience called");
		this.setState({ editCategory: true });
	}

	render() {
		if (this.state.editCategory) {
			return (
				<React.Fragment>
					<CategoryTitle
						title="Educational Experience"
						editCategory={this.editEducationalExperience}
					/>
					<form
						className="infoBlock"
						onSubmit={this.submitEducationalExperience}
					>
						<label htmlFor="schoolNameID">School Name</label>
						<input
							id="schoolNameID"
							type="text"
							value={this.state.schoolName}
							onChange={this.changeSchoolName}
						/>
						<label htmlFor="changeTitleOfStudyID">Title of Study</label>
						<input
							id="changeTitleOfStudyID"
							type="text"
							value={this.state.titleOfStudy}
							onChange={this.changeTitleOfStudy}
						/>
						<label htmlFor="changeDateOfStudyID">Date of Study</label>
						<input
							id="changeDateOfStudyID"
							type="text"
							value={this.state.dateOfStudy}
							onChange={this.changeDateOfStudy}
						/>
						<button type="submit">Submit</button>
					</form>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<CategoryTitle
						title="Educational Experience"
						editCategory={this.editEducationalExperience}
					/>
					<div className="infoBlock">
						<div>School Name</div>
						<div onClick={this.editEducationalExperience}>
							{this.state.schoolName}
						</div>

						<div>Title of Study</div>
						<div onClick={this.editEducationalExperience}>
							{this.state.titleOfStudy}
						</div>

						<div>Date of Study</div>
						<div onClick={this.editEducationalExperience}>
							{this.state.dateOfStudy}
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
}

export default EducationalExperience;
