import React from "react";
import axios from "axios";
import TravelLogCard from "./../../components/TravelLogCard/TravelLogCard";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

class TravelLog extends React.Component {
  state = {
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    this.setState({ userId });

    axios
      .get(`${process.env.REACT_APP_API_URI}/api/travelLogs`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", response);
        const travelLogsArr = response.data;
        this.setState({ travelLogsArr });
      })
      .catch((err) => console.log(err));
  }

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
                <TravelLogCard travelLog={travelLog} />
              </div>
            );
          })
          : null}
      </div>
    );
  }
}

export default withAuth(TravelLog);
