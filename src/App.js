import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import EditProfile from "./pages/EditProfile/EditProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import PostDetails from "./pages/PostDetails/PostDetails";
import MyPosts from "./pages/MyPosts/MyPosts";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import TravelLog from "./pages/TravelLog/TravelLog";
import CreateTravelLog from "./pages/CreateTravelLog/CreateTravelLog";
import DeleteProfileConfirmation from "./pages/DeleteProfileConfirmation/DeleteProfileConfirmation";
import MyFavorites from "./pages/MyFavorites/MyFavorites";

class App extends Component {
  render() {

    console.log('props', this.props)
    return (
      <div>


        <Navbar />

        <Switch>

          <AnonRoute exact path="/" component={LandingPage} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/profile/:userId" component={Profile} />
          <PrivateRoute exact path="/editProfile/:userId" component={EditProfile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/postDetails/:postId" component={PostDetails} />
          <PrivateRoute exact path="/myPosts/:userId" component={MyPosts} />
          <PrivateRoute exact path="/createPost" component={CreatePost} />
          <PrivateRoute exact path="/editPost/:postId" component={EditPost} />
          <PrivateRoute exact path="/travelLogs" component={TravelLog} />
          <PrivateRoute exact path="/createTravelLog" component={CreateTravelLog} />
          <PrivateRoute exact path="/deleteProfileConfirmation/:userId" component={DeleteProfileConfirmation} />
          <PrivateRoute exact path="/favoritePosts/:userId" component={MyFavorites} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
