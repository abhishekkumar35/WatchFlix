import React from "react";
import {
  img_watch_facebook_logo,
  img_watch_linkedin_logo,
  img_watch_twitter_logo,
} from "../utils/constants";
import WithAuth from "./WithAuth";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex col" style={{ margin: "20px", marginTop: "200px" }}>
      <p>CONTACT US</p>
      <div className="flex ">
        <span>
          <img
            src={img_watch_facebook_logo}
            alt=""
            className="footer__img-size-social"
            style={{ margin: "2px" }}
          />
        </span>
        <span>
          <img
            src={img_watch_twitter_logo}
            alt=""
            className="footer__img-size-social"
            style={{ margin: "2px" }}
          />
        </span>
        <span>
          <img
            src={img_watch_linkedin_logo}
            alt=""
            className="footer__img-size-social"
            style={{ margin: "2px" }}
          />
        </span>
      </div>
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </div>
  );
};

export default WithAuth(Footer);
