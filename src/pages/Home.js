import { Avatar } from "@material-ui/core";
import React from "react";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerAvatar">
          <div className="home__headerLeft">
     

          </div>

          <div className="home__headerRight">


            <Avatar />
          </div>
        </div>
      </div>

      <div className="home__body">


      </div>
    </div>
  );
}

export default Home;
