import React from "react";
import axios from "axios";
import TravelLogCard from "./../../components/TravelLogCard/TravelLogCard";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import './TravelLog.css';
import './../../App.css'

class TravelLog extends React.Component {
  state = {
    travelLogsArr: []
  };

  componentDidMount() {
    this.getTravelLogs();
  }

  getTravelLogs = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/travelLogs`,
        { withCredentials: true }
      )
      .then((response) => {
        const travelLogsArr = response.data;
        this.setState({ travelLogsArr });
      })
      .catch((err) => console.log(err));
  }

  deleteHandler = (travelLogId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/deleteTravelLog/${travelLogId}`,
        { withCredentials: true }
      )
      .then(() => {
        this.getTravelLogs();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="my-travellog-container">
        <header className="my-travellog-header">
          <h1 >My Travel Log</h1>
          <Link exact to={`/createTravelLog`}>
            <button className="form-button">Create Travel Log</button>
          </Link>
        </header>
        
        <section >
          {this.state.travelLogsArr && this.state.travelLogsArr.length > 0  
            ? this.state.travelLogsArr.map((travelLog) => {
              return (
                <div className="travel-log">
                  <TravelLogCard travelLog={travelLog} deleteHandler={this.deleteHandler} />
                </div>
              );
            })
            : (
              <p className="no-posts">
            You don't have any Travel Logs. Create one{" "}
            <Link exact to={`/createTravelLog`}>
              here!
            </Link>
          </p>
            )
            }
        </section>
      </div>
    );
  }
}

export default withAuth(TravelLog);
