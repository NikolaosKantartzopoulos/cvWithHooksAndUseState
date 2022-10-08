import React from "react";
import "../styles/categoryTitle.css";

function CategoryTitle(props) {
	return <h3 className="title">{props.title}</h3>;
}

export default CategoryTitle;
