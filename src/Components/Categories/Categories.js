import React, { Component } from "react";
import RestaurentDataList from "./../../restaurent-data.json";
import classes from "./Categories.css";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category
        }
    }
    changeCategory(category) {
        this.props.onClick(category);
        this.setState({ category: category })
    }
    getCategoryList = () => {
        let categoryElemList = []
        for (let categoryObj of RestaurentDataList) {
            const liElement =
                <li className={"nav-item " + (this.state.category === categoryObj.category ? 'active' : '')} key={categoryObj.category}>
                    <a className="nav-link ml-2" onClick={() => this.changeCategory(categoryObj.category)}>
                        {categoryObj.category}
                    </a>
                </li>
            categoryElemList.push(liElement);
        }
        return categoryElemList;
    }
    render() {
        return (
            <nav className="navbar">
                <ul className="category navbar-nav">
                    {this.getCategoryList()}
                </ul>
            </nav>

        )
    }
}
export default Categories;