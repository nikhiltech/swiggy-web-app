import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./App.css";
import Restaurents from "./Components/Restaurents/Restaurents";
import Categories from "./Components/Categories/Categories";
import RestaurentDataList from "./restaurent-data.json";

class App extends Component {
  handleCategorySelection = (selectedCategory) => {
    for (let categoryObj of RestaurentDataList) {
      if (categoryObj.category === selectedCategory) {
        this.setState({
          selectedCategory: selectedCategory
        });
        return;
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: RestaurentDataList[0].category,
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Categories onClick={(category) => this.handleCategorySelection(category)} />
          </div>
          <div className="col-sm-9">
            <h4 className="sticky-category">{this.state.selectedCategory}</h4>
            <Restaurents category={this.state.selectedCategory} />
          </div>
        </div>
      </div>
    );
  }

}
export default App;
