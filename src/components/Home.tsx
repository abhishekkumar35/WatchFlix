import React, { useEffect, useState } from "react";

import WithAuth from "./WithAuth";
import axios from "axios";
import { url_home_api_get } from "../utils/constants";
import UiCard from "../UI/UiCard";
import VideoItemDetails from "./VideoItemDetails";
import { Link } from "react-router-dom";

const Home: any = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get(url_home_api_get, { ...config }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  return (
    <>
      <UiCard>
        <div className="home">
          <ul>
            {data?.videos.map((videoItem: any) => {
              return (
                <li className="home_li_padding">
                  <div>
                    <Link to={`/videos/${videoItem.id}`}>
                      <img
                        src={videoItem.thumbnail_url}
                        alt=""
                        className="img_thumbnail"
                      />
                    </Link>
                    <div className="flex">
                      <img
                        src={videoItem.channel.profile_image_url}
                        alt="DX"
                        className="home__videochannel_profile"
                      />
                      <div className="flex col">
                        <p>{videoItem.title}</p>
                        <p>{videoItem.channel.name}</p>
                        <div className="flex">
                          <div>
                            <span>{videoItem.view_count} views</span>
                            <span>&bull;</span>
                            <span>
                              {(function () {
                                let date = new Date(videoItem.published_at);
                                return 2023 - date.getFullYear();
                              })()}
                              years ago
                            </span>
                          </div>
                        </div>
                      </div>
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

export default WithAuth(Home);
