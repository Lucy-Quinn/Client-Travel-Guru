import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={'/dashboard'} id='home-btn'>
          Travel Guru
                </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {this.props.isLoggedIn ? (
            //   //When logged in

            <ul class="navbar-nav ml-auto">

              <li class="nav-item">
                <Link className="nav-link" to={'/dashboard'} id='home-btn'>
                  <p>Search for Travel Posts</p>
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/profile/${this.props.user._id}`}>
                  Profile
               </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/createPost`}>
                  Create Post
               </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/myPosts/${this.props.user._id}`}>
                  My Posts
               </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/favoritePosts/${this.props.user._id}`}>
                  My Favorites
               </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/travelLogs`}>
                  My Travel Log
               </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.logout}>Logout</Link>
              </li>
              <li class="nav-item nav-link active">
                <p>Welcome {this.props.user && this.props.user.username}</p>
              </li>

              {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}

            </ul>
          ) :
            (
              <ul class="navbar-nav ml-auto">
                {/* When logged out */}
                <li class="nav-item">
                  <Link className="nav-link" to={'/'} id='home-btn'>
                    <p>Home</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>


                {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}

              </ul>
            )}
        </div>
      </nav>

    )
  }
}

export default withAuth(Navbar);


// {this.props.isLoggedIn ? (
//   //When logged in
//   <div>
//     <Link to={'/dashboard'} id='home-btn'>
//       <h4>Search for Travel Posts</h4>
//     </Link>
//     <p>username: {this.props.user && this.props.user.username}</p>
//     <button onClick={this.props.logout}>Logout</button>
//     <Link to={`/profile/${this.props.user._id}`}>
//       Profile
//     </Link>
//     <Link to={`/createPost`}>
//       Create Post
//     </Link>
//     <Link to={`/myPosts/${this.props.user._id}`}>
//       My Posts
//     </Link>
//     <Link to={`/favoritePosts/${this.props.user._id}`}>
//       My Favorites
//     </Link>
//     <Link to={`/travelLogs`}>
//       My Travel Log
//     </Link>
//   </div>
// ) : (
//     //When logged out
//     <div>
//       <Link to={'/'} id='home-btn'>
//         <h4>Home</h4>
//       </Link>
//       <Link to="/login">
//         <button classNameName="navbar-button">Login</button>{' '}
//       </Link>
//       <br />
//       <Link to="/signup">
//         <button classNameName="navbar-button">Sign Up</button>{' '}
//       </Link>
//     </div>
//   )}
