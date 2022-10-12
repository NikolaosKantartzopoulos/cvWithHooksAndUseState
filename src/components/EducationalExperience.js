import React, { useState } from "react";
import CategoryTitle from "./CategoryTitle";
import "../styles/styles.css";

function EducationalExperience(props) {
	const [schoolName, setSchoolName] = useState("");
	const [titleOfStudy, setTitleOfStudy] = useState("");
	const [dateOfStudy, setDateOfStudy] = useState("");
	const [editCategory, setEditCategory] = useState(false);

	// changeSchoolName = changeSchoolName.bind(;
	// changeTitleOfStudy = changeTitleOfStudy.bind(;
	// changeDateOfStudy = changeDateOfStudy.bind(;
	// submitEducationalExperience =
	// 	submitEducationalExperience.bind(;
	// editEducationalExperience = editEducationalExperience.bind(;

	const changeSchoolName = (event) => {
		console.log("changeSchoolName called");
		setSchoolName(event.target.value);
	};
	const changeTitleOfStudy = (event) => {
		console.log("changeTitleOfStudy called");
		setTitleOfStudy(event.target.value);
	};
	const changeDateOfStudy = (event) => {
		console.log("changeDateOfStudy called");
		setDateOfStudy(event.target.value);
	};
	const submitEducationalExperience = () => {
		console.log("submitEducationalExperience called");
		setEditCategory(false);
	};
	const editEducationalExperience = () => {
		console.log("editEducationalExperience called");
		setEditCategory(true);
	};

	if (editCategory) {
		return (
			<React.Fragment>
				<CategoryTitle
					title="Educational Experience"
					editCategory={editEducationalExperience}
				/>
				<form className="infoBlock" onSubmit={submitEducationalExperience}>
					<label htmlFor="schoolNameID">School Name</label>
					<input
						id="schoolNameID"
						type="text"
						value={schoolName}
						onChange={changeSchoolName}
					/>
					<label htmlFor="changeTitleOfStudyID">Title of Study</label>
					<input
						id="changeTitleOfStudyID"
						type="text"
						value={titleOfStudy}
						onChange={changeTitleOfStudy}
					/>
					<label htmlFor="changeDateOfStudyID">Date of Study</label>
					<input
						id="changeDateOfStudyID"
						type="text"
						value={dateOfStudy}
						onChange={changeDateOfStudy}
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
					editCategory={editEducationalExperience}
				/>
				<div className="infoBlock">
					<div>School Name</div>
					<div onClick={editEducationalExperience}>{schoolName}</div>

					<div>Title of Study</div>
					<div onClick={editEducationalExperience}>{titleOfStudy}</div>

					<div>Date of Study</div>
					<div onClick={editEducationalExperience}>{dateOfStudy}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default EducationalExperience;
