import React, { Component } from "react";
import RestaurentDataList from "./../../restaurent-data.json";
import classes from "./Categories.css";
import AppConstats from "./../../constants";

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
        debugger
        let categoryElemList = []
        let categories = RestaurentDataList.map(restaurentDataObj => restaurentDataObj.category);
        categories.push(AppConstats.categoryNames.swiggyExcusive)
        categories.push(AppConstats.categoryNames.seeAll)
        for (let category of categories) {
            const liElement =
                <li className={"nav-item " + (this.state.category === category ? 'active' : '')} key={category}>
                    <a className="nav-link ml-2" onClick={() => this.changeCategory(category)}>
                        {category}
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