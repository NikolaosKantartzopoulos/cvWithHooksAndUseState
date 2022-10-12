import React, { useState } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";
import "../styles/practicalExperience.css";

function PracticalExperience(props) {
	const [companyName, setCompanyName] = useState("");
	const [positionTitle, setPositionTitle] = useState("");
	const [mainTasks, setMainTasks] = useState("");
	const [dateRange, setDateRange] = useState(false);
	const [editCategory, setEditCategory] = useState(false);

	const changeCompanyName = (event) => {
		console.log("changeCompanyName called");
		setCompanyName(event.target.value);
	};
	const changePositionTitle = (event) => {
		console.log("changePositionTitle called");
		setPositionTitle(event.target.value);
	};
	const changeMainTasks = (event) => {
		console.log("changeMainTasks called");
		setMainTasks(event.target.value);
	};
	const changeDateRange = (event) => {
		console.log("changeDateRange called");
		setDateRange(event.target.value);
	};
	const submitPracticalExperience = (e) => {
		console.log("submitPracticalExperience called");
		setEditCategory(false);
	};
	const editPracticalExperience = (e) => {
		console.log("editPracticalExperience called");
		setEditCategory(true);
	};

	if (editCategory) {
		return (
			<React.Fragment>
				<CategoryTitle
					title="Practical Experience"
					editCategory={editPracticalExperience}
				/>
				<form className="infoBlock" onSubmit={submitPracticalExperience}>
					<label htmlFor="comNameID">Company Name</label>
					<input
						id="comNameID"
						type="text"
						value={companyName}
						onChange={changeCompanyName}
					/>
					<label htmlFor="posTitleID">Postition Title</label>
					<input
						id="posTitleID"
						type="text"
						value={positionTitle}
						onChange={changePositionTitle}
					/>
					<label htmlFor="mainTasksID">Main Tasks</label>
					<input
						id="mainTasksID"
						type="text"
						value={mainTasks}
						onChange={changeMainTasks}
					/>
					<label htmlFor="dateRangeID">Date Range</label>
					<input
						id="dateRangeID"
						type="text"
						value={dateRange}
						onChange={changeDateRange}
					/>
					<button type="submit">Submit</button>
				</form>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<CategoryTitle
					title="Practical Experience"
					editCategory={editPracticalExperience}
				/>

				<div className="infoBlock">
					<div>Company Name</div>
					<div onClick={editPracticalExperience}>{companyName}</div>
					<div>Postition Tasks</div>
					<div onClick={editPracticalExperience}>{positionTitle}</div>

					<div>Main Tasks</div>
					<div onClick={editPracticalExperience}>{mainTasks}</div>

					<div>Date Range</div>
					<div onClick={editPracticalExperience}>{dateRange}</div>
				</div>
			</React.Fragment>
		);
	}
}
export default PracticalExperience;
