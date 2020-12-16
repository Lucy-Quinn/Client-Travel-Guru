import React from "react";
import { withAuth } from "../../context/auth-context";
import './TravelLogCard.css';
import './../../App.css';

class TravelLogCard extends React.Component {


  render() {
    return (
      <div className="travel-log-card">
        <header className="travellog-card-header">
          <h2>{this.props.travelLog.title}</h2>

        </header>
        <section className="travellog-card-info">
          <h3>{this.props.travelLog.country}</h3>

          <h5>{this.props.travelLog.city}</h5>

          <p>{this.props.travelLog.description}</p>
        </section>

        <section className="travelog-card-footer">
          <button className="card-button" onClick={
            () => this.props.deleteHandler(this.props.travelLog._id)
          }>
            Delete
          </button>
          {
            this.props.travelLog.updated_at
              ? <p>{
                this.props.travelLog.updated_at.slice(0, 10).split('-').reverse().join('-')
              }</p>
              : null
          }
        </section>
      </div>
    );
  }
}

export default withAuth(TravelLogCard);
