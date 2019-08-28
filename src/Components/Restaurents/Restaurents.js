import React, { Component } from "react";
import RestaurentDataList from "./../../restaurent-data.json";
import Restaurent from "../Restaurent/Restaurent";
import classes from "./Restaurents.css";

class Restaurents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      restaurentList: Restaurents.getRestautentList(this.props.category),
      totalItems: 5,
      moreItemExist: true
    };
  }
  static getDerivedStateFromProps(props, current_state) {
    if (current_state.category !== props.category) {
      return {
        category: props.category,
        restaurentList: Restaurents.getRestautentList(props.category),
      }
    }
    return null
  }
  static getRestautentList(category) {
    for (let categoryObj of RestaurentDataList) {
      if (categoryObj.category === category) {
        return categoryObj.restaurantList;
      }
    }
  }
  renderRestaurent() {
    let restaurentElemList = [];
    for (let i = 1; i <= this.state.totalItems; i++) {
      if (this.state.restaurentList[i]) {
        restaurentElemList.push(
          <div className="col-sm-4 mt-2"><Restaurent
            name={this.state.restaurentList[i].name}
            ratings={this.state.restaurentList[i].ratings}
            foodTypes={this.state.restaurentList[i].food_types}
            isExclusive={this.state.restaurentList[i].isExlusive}
            delvTime={this.state.restaurentList[i].delivery_time}
            priceForTwo={this.state.restaurentList[i].price_for_two}
            key={this.state.category + this.state.restaurentList[i].name}
          /></div>)
      } else {
        return restaurentElemList;
      }
    }
    return restaurentElemList;

  }
  loadMore() {
    if (this.state.totalItems + 6 >= this.state.restaurentList.length) {
      this.setState({
        totalItems: this.state.restaurentList.length,
        moreItemExist: false
      });
    } else {
      this.setState({
        totalItems: this.state.totalItems + 6
      });
    }
    this.setState({ totalItems: this.state.totalItems + 6 });
    debugger
  }
  getNextButton() {
    if (this.state.moreItemExist) {
      return (<div className="col-sm-4 mt-2">
        <div className="restaurent next-tile">
          <div type="button" onClick={() => this.loadMore()}>
            +{this.state.restaurentList.length - this.state.totalItems} More
          </div>
        </div>
      </div>);
    }
  }
  render() {
    return (
      <section>
        <div className="row mt-1">
          {this.renderRestaurent()}
          {
            this.getNextButton()
          }

        </div>
      </section>
    );
  }
}

export default Restaurents;
