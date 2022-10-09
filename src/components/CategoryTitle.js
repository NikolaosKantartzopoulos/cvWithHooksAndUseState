import React, { Component } from "react";
import "../styles/categoryTitle.css";
import editIcon from "../images/application-edit-outline.png";

class CategoryTitle extends Component {
	constructor(props) {
		super(props);
	}
	render(props) {
		return (
			<div className="title">
				<h3>{this.props.title}</h3>
				<img src={editIcon} onClick={this.props.editCategory} />
			</div>
		);
	}
}

export default CategoryTitle;
