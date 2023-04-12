import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import WithAuth from "./WithAuth";

type Props = {};

const Sidebar = (props: Props) => {
  const [active, setActive] = useState<boolean | null>(null);
  let activateClass = active ? "sidebar__selected" : "";
  const activate = () => {
    // e.target.preventDefault();
    setActive((active) => !active);
  };

  return (
    <div
      className="sidebar flex col justify-between"
      style={{ overflow: "hidden" }}
    >
      <div className="">
        <Link to="/" className={activateClass} onClick={activate}>
          <img src="" alt=":H:" />
          <p>Home</p>
        </Link>
        <Link to="/trending" className="" onClick={activate}>
          <img src="" alt=":T:" />
          <p>Trending</p>
        </Link>
        <Link to="/gaming" className="" onClick={activate}>
          <img src="" alt=":G:" />
          <p>Gaming</p>
        </Link>
        <Link to="/saved-videos" className="" onClick={activate}>
          <img src="" alt=":S:" />
          <p>SavedVideos</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default WithAuth(Sidebar);
