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
    this.imageUrls = [
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&amp;fit=crop&amp;w=500&amp;q=60',
      'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&amp;fit=crop&amp;w=500&amp;q=60'
    ];
  }
  static getDerivedStateFromProps(props, current_state) {
    if (current_state.category !== props.category) {
      return {
        category: props.category,
        totalItems: 5,
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
  getImageUrl() {
    let imageUrl = this.imageUrls[Math.floor(Math.random() * this.imageUrls.length)];
    return imageUrl;
  }
  renderRestaurent() {
    let restaurentElemList = [];
    for (let i = 0; i < this.state.totalItems; i++) {
      if (this.state.restaurentList[i]) {
        restaurentElemList.push(
          <div className="col-sm-4 mt-5" key={this.state.category + this.state.restaurentList[i].name}><Restaurent
            name={this.state.restaurentList[i].name}
            ratings={this.state.restaurentList[i].ratings}
            foodTypes={this.state.restaurentList[i].food_types}
            isExclusive={this.state.restaurentList[i].isExlusive}
            delvTime={this.state.restaurentList[i].delivery_time}
            priceForTwo={this.state.restaurentList[i].price_for_two}
            imageUrl={this.getImageUrl()}
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
  }
  getNextButton() {
    if (this.state.moreItemExist) {
      return (<div className="col-sm-4 mt-5">
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
