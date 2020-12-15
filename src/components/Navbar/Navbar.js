import React, { Component } from "react";
//import { Link, NavLink } from "react-router-dom";
import { withAuth } from "../../context/auth-context";
import {
  Navbar,
  Nav,
  Link,
  NavDropdown,
  Collapse,
  Brand,
  Toggle,
  Item,
  Divider,
} from "react-bootstrap";

class OurNavbar extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Travel Guru</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.props.isLoggedIn ? (
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Search</Nav.Link>
              <Nav.Link href={`/profile/${this.props.user._id}`}>
                Profile
              </Nav.Link>
              <NavDropdown title="Travel Posts" id="collasible-nav-dropdown">
                <NavDropdown.Item href={`/myPosts/${this.props.user._id}`}>
                  My Travel posts
                </NavDropdown.Item>
                <NavDropdown.Item href="/createPost">
                  Create Travel Posts
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={`/favoritePosts/${this.props.user._id}`}>
                My Favorites
              </Nav.Link>
              <Nav.Link href="/travelLogs">My Travel Log</Nav.Link>
              <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
              {/* <Nav.Link className="welcome-user" href="#">
                Welcome {this.props.user && this.props.user.username}
              </Nav.Link> */}
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <Link className="navbar-brand" to={'/dashboard'} id='home-btn'>
      //     Travel Guru
      //           </Link>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //     {this.props.isLoggedIn ? (
      //       //   //When logged in

      //       <ul class="navbar-nav ml-auto">

      //         <li class="nav-item">
      //           <Link className="nav-link" to={'/dashboard'} id='home-btn'>
      //             Search
      //           </Link>
      //         </li>
      //         <li class="nav-item">
      //           <Link className="nav-link" to={`/profile/${this.props.user._id}`}>
      //             Profile
      //          </Link>
      //         </li>
      //         <li class="nav-item">
      //           <Link className="nav-link" to={`/createPost`}>
      //             Create Post
      //          </Link>
      //         </li>
      //         <li class="nav-item">
      //           <Link className="nav-link" to={`/myPosts/${this.props.user._id}`}>
      //             My Posts
      //          </Link>
      //         </li>
      //         <li class="nav-item">
      //           <Link className="nav-link" to={`/favoritePosts/${this.props.user._id}`}>
      //             My Favorites
      //          </Link>
      //         </li>
      //         <li class="nav-item">
      //           <Link className="nav-link" to={`/travelLogs`}>
      //             My Travel Log
      //          </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" onClick={this.props.logout}>Logout</Link>
      //         </li>
      //         <li class="nav-item nav-link active">
      //           <p>Welcome {this.props.user && this.props.user.username}</p>
      //         </li>
      //       </ul>
      //     ) :
      //       (
      //         <ul class="navbar-nav ml-auto">
      //           {/* When logged out */}
      //           <li class="nav-item">
      //             <Link className="nav-link" to={'/'} id='home-btn'>
      //               <p>Home</p>
      //             </Link>
      //           </li>
      //           <li class="nav-item">
      //             <Link className="nav-link" to="/login">Login</Link>
      //           </li>
      //           <li class="nav-item">
      //             <Link className="nav-link" to="/signup">Sign Up</Link>
      //           </li>
      //         </ul>
      //       )}
      //   </div>
      // </nav>
    );
  }
}

export default withAuth(OurNavbar);

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
