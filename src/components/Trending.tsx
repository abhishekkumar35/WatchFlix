import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UiCard from "../UI/UiCard";
import { url_trending_api_get } from "../utils/constants";
import WithAuth from "./WithAuth";

type Props = {};

const Trending = (props: Props) => {
  const [trendingResults, setTrendingResults] = useState<{
    videos: any;
  } | null>(null);
  const jwt_token = localStorage.getItem("jwt_token");
  useEffect(() => {
    axios
      .get(url_trending_api_get, {
        headers: { Authorization: "Bearer " + jwt_token },
      })
      .then((res) => setTrendingResults(res.data));
  }, [jwt_token]);
  return (
    <>
      <UiCard>
        <div className="trending__container">
          <div
            className="flex"
            style={{
              padding: "80px",
              marginTop: "-10px",

              width: "100%",
              backgroundColor: "#e6e6e6",
            }}
          >
            <img src="" alt="T:" className="" />
            <span>Trending</span>
          </div>
          <div style={{ paddingLeft: "80px", paddingTop: "40px" }}>
            <ul>
              {trendingResults?.videos.map((videoItem: any) => {
                return (
                  <li className="flex" style={{ margin: "10px" }}>
                    <Link to={`/videos/${videoItem.id}`}>
                      <img
                        src={videoItem?.thumbnail_url}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Link>
                    <div className="" style={{ width: "50%", margin: "10px" }}>
                      <p>{videoItem.title}</p>
                      <p>{videoItem.channel.name}</p>
                      <div>
                        <span>{videoItem.view_count} views</span>
                        <span>&bull;</span>
                        <span>
                          {(function () {
                            let date = new Date(videoItem.published_at);
                            return 2023 - date.getFullYear();
                          })()}
                          years
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </UiCard>
    </>
  );
};

export default WithAuth(Trending);
