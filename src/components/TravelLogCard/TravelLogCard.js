import React from "react";
import { Link } from "react-router-dom";

class TravelLogCard extends React.Component {
  render() {
    // console.log('propssss', this.props);
    return (
      <div>
        <h1>TravelLog card</h1>
        <h2>{this.props.travelLog.title}</h2>
        <h3>{this.props.travelLog.country}</h3>
        <h4>{this.props.travelLog.city}</h4>
        <p>{this.props.travelLog.description}</p>
      </div>
    );
  }
}

export default TravelLogCard;
