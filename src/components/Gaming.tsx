import React, { useState, useEffect } from "react";
import axios from "axios";
import UiCard from "../UI/UiCard";
import WithAuth from "./WithAuth";
import { Link } from "react-router-dom";
import { url_gamming_api_get } from "../utils/constants";

type Props = {};

const Gamming = (props: Props) => {
  const [gamingResults, setGamingResults] = useState<{ videos: any } | null>();
  const jwt_token = localStorage.getItem("jwt_token");
  useEffect(() => {
    axios
      .get(url_gamming_api_get, {
        headers: { Authorization: "Bearer " + jwt_token },
      })
      .then((res) => {
        setGamingResults(res.data);
      });
  }, [jwt_token]);
  return (
    <>
      <UiCard>
        <div className="gamming__container">
          <div
            className="flex"
            style={{
              padding: "80px",
              backgroundColor: "#e6e6e6",
              width: "100%",
            }}
          >
            <p>Gamming</p>
          </div>
          <ul className="grid" style={{ padding: "80px" }}>
            {gamingResults?.videos.map((videoItem: any) => {
              return (
                <li style={{ margin: "10px" }}>
                  <div>
                    <Link to={`/videos/${videoItem.id}`}>
                      <img
                        src={videoItem.thumbnail_url}
                        alt="img"
                        style={{ width: "100%", height: "350px" }}
                      />
                    </Link>
                    <div className="flex col">
                      <p>{videoItem.title}</p>
                      <p>{videoItem.view_count} views</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </UiCard>
    </>
  );
};

export default WithAuth(Gamming);
