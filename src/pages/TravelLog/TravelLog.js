import React from "react";
import axios from "axios";
import TravelLogCard from "./../../components/TravelLogCard/TravelLogCard";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

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
        console.log("reponse", response);
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
      .then((response) => {
        console.log("reponse", response);
        this.getTravelLogs();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>My Travel Log</h1>
        <div>
          <Link exact to={`/createTravelLog`}>
            <button>Create Travel Log</button>
          </Link>
        </div>
        {this.state.travelLogsArr
          ? this.state.travelLogsArr.map((travelLog) => {
            return (
              <div>
                <TravelLogCard travelLog={travelLog} deleteHandler={this.deleteHandler} />
              </div>
            );
          })
          : null}
      </div>
    );
  }
}

export default withAuth(TravelLog);
