import React, { Component } from "react";
import RestaurentDataList from "./../../restaurent-data.json";
import classes from "./Categories.css";

class Categories extends Component {
    constructor(props) {
        super(props);

    }

    getCategoryList = () => {
        let categoryElemList = []
        for (let categoryObj of RestaurentDataList) {
            const liElement =
                <li className={"nav-item " + this.props.category === categoryObj.category ? 'active' : ''}>
                    <a onClick={() => this.props.onClick(categoryObj.category)}>
                        {categoryObj.category}
                    </a>
                </li>
            categoryElemList.push(liElement);
        }
        return categoryElemList;
    }
    render() {
        return (
            <nav className="navbar bg-light">
                <ul className="category navbar-nav">
                    {this.getCategoryList()}
                </ul>
            </nav>

        )
    }
}
export default Categories;