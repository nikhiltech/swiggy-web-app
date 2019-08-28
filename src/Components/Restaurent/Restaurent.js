import React, { Component } from "react";
import classes from "./Restaurent.css";

class Restaurent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const imageList = [
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
    let imageUrl = imageList[Math.floor(Math.random() * imageList.length)];
    return (
      <div className="restaurent">
        <div className="text-center">
          <img className="restaurent-image" src={imageUrl}></img>
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
