import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import RestaurentDataList from "./../../restaurent-data.json";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    getCategoryList = () => {
        let categoryElemList = []
        for (let categoryObj of RestaurentDataList) {
            const liElement = <li>
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
            <ul className="category">
                {this.getCategoryList()}
            </ul>
        )
    }
}
export default Categories;