import React, { Component } from "react";
import classes from "./Restaurent.css";

class Restaurent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="restaurent">
        <div className="text-center">
          <img className="restaurent-image" src={this.props.imageUrl}></img>
        </div>
        <div className="restaurent-desc pl-2 pr-2">
          <div><strong className="mt-1">{this.props.name}</strong></div>
          <small>{this.props.foodTypes.join(", ")}</small>
          <div className="misc-items">
            <span className="ratings">&#9734; {this.props.ratings ? this.props.ratings : ''}</span>&nbsp; &middot;
          <span className=""> {this.props.delvTime}</span>&nbsp; &middot;
          <span className="">&#8377; {this.props.priceForTwo} for two</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurent;
