import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Home Page</h1>

      <div>header image</div>
      <div>
        <Link to={"/signup"}>
          <button>Sign Up</button>
        </Link>

        <Link to={"login"}>
          <button>Login</button>
        </Link>
      </div>

      <h4>What is Travel Guru?</h4>
      <p>
        Travel Guru is a platform where you can interact with other users about
        travel experiences. Create a travel post to share your wonderful trips,
        comment on other users posts and add them to your favorites!. Also you
        have a private section dedicated for your next travel ideas, go and
        check your Travel Log!
      </p>
    </div>
  );
}

export default LandingPage;
