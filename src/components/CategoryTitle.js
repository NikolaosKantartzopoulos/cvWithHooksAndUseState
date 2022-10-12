import React, { Component } from "react";
import "../styles/categoryTitle.css";
import editIcon from "../images/application-edit-outline.png";

function CategoryTitle(props) {
	return (
		<div className="title">
			<h3>{props.title}</h3>
			<img src={editIcon} onClick={props.editCategory} />
		</div>
	);
}

export default CategoryTitle;
