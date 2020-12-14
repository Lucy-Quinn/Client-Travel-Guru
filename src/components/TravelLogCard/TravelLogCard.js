import React from "react";
import { withAuth } from "../../context/auth-context";

class TravelLogCard extends React.Component {


  render() {
    return (
      <div>
        <h2>{this.props.travelLog.title}</h2>
        <h4>{this.props.travelLog.updated_at}</h4>
        <h3>{this.props.travelLog.country}</h3>
        <h4>{this.props.travelLog.city}</h4>
        <p>{this.props.travelLog.description}</p>

        <button onClick={() => this.props.deleteHandler(this.props.travelLog._id)}>Delete</button>
      </div>
    );
  }
}

export default withAuth(TravelLogCard);
