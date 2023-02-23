import "../Components/Main.css";
import React from "react";

function Main({name, space}) {
  return (
    <div className="container">
      <div className="comp">
        <p className="para-i">{name}</p>
        <p className="para-ii">{space}</p>
        <p className="para-iii">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience! Explore
        </p>
      </div>

          <div className="circle">
              <p className="circle-e">EXPLORE</p>
      </div>
    </div>
  );
}

export default Main;

//we can pass props from parent to child and also using another parent just as a tree diagram to pass data between components