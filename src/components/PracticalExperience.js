import React, { Component } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";
import "../styles/practicalExperience.css";

class PracticalExperience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			companyName: "",
			positionTitle: "",
			mainTasks: "",
			dateRange: "",
		};
		this.changeCompanyName = this.changeCompanyName.bind(this);
		this.changePositionTitle = this.changePositionTitle.bind(this);
		this.changeMainTasks = this.changeMainTasks.bind(this);
		this.changeDateRange = this.changeDateRange.bind(this);
	}

	changeCompanyName(event) {
		console.log("changeCompanyName called");
		this.setState({ companyName: event.target.value });
	}
	changePositionTitle(event) {
		console.log("changePositionTitle called");
		this.setState({ positionTitle: event.target.value });
	}
	changeMainTasks(event) {
		console.log("changeMainTasks called");
		this.setState({ mainTasks: event.target.value });
	}
	changeDateRange(event) {
		console.log("changeDateRange called");
		this.setState({ dateRange: event.target.value });
	}

	render() {
		return (
			<React.Fragment>
				<CategoryTitle title="Practical Experience" />
				<div className="infoBlock">
					<label htmlFor="comNameID">Company Name</label>
					<input
						id="comNameID"
						type="text"
						value={this.state.companyName}
						onChange={this.changeCompanyName}
					/>
					<label htmlFor="posTitleID">Postition Title</label>
					<input
						id="posTitleID"
						type="text"
						value={this.state.positionTitle}
						onChange={this.changePositionTitle}
					/>
					<label htmlFor="mainTasksID">Main Tasks</label>
					<input
						id="mainTasksID"
						type="text"
						value={this.state.mainTasks}
						onChange={this.changeMainTasks}
					/>
					<label htmlFor="dateRangeID">Date Range</label>
					<input
						id="dateRangeID"
						type="text"
						value={this.state.dateRange}
						onChange={this.changeDateRange}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default PracticalExperience;
