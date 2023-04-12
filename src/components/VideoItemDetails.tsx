import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WithAuth from "./WithAuth";
import UiCard from "../UI/UiCard";
import ReactPlayer from "react-player/lazy";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import axios from "axios";
import { url_videodetails_api_get } from "../utils/constants";
import { connect } from "react-redux";

type Props = {};

const VideoItemDetails: any = (props: Props) => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState<any | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSave = () => {};
  useEffect(() => {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      axios
        .get(url_videodetails_api_get + id, {
          headers: { Authorization: `Bearer ` + jwt_token },
        })
        .then((res) => {
          setVideoData(res.data);
          setIsLoading(false);
          setUrl(res.data.video_details.video_url);
        });
    }
  }, [id]);

  return (
    <UiCard>
      <div className="videoItemDetails__container">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            <ReactPlayer url={url} width="100%" height="75%" controls={true} />
            <p>{videoData.video_details.title}</p>
            <div className="flex justify-between">
              <div className="flex align-center">
                <span style={{ margin: "5px" }}>
                  {videoData.video_details.view_count} views
                </span>
                <span style={{ margin: "5px" }}>&bull;</span>
                <span style={{ margin: "5px" }}>
                  {(function () {
                    let date = new Date(videoData.video_details.published_at);
                    return 2023 - date.getFullYear();
                  })()}
                  &nbsp;years
                </span>
              </div>
              <div className="flex align-center">
                <span className="flex align-center" style={{ margin: "10px" }}>
                  <BiLike /> <span style={{ margin: "5px" }}>like</span>
                </span>
                <span className="flex align-center" style={{ margin: "10px" }}>
                  <BiDislike /> <span style={{ margin: "5px" }}>dislike</span>
                </span>
                <span
                  className="flex align-center"
                  style={{ margin: "10px" }}
                  onClick={handleSave}
                >
                  <FaRegSave /> <span style={{ margin: "5px" }}>save</span>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </UiCard>
  );
};

//   return isLoading ? (
//     <p>loading...</p>
//   ) : (
//     <UiCard>
//       <div className="videoItemDetails__container">
//         <ReactPlayer url={videoData?.videoDetails?.video_url} />
//       </div>
//     </UiCard>
//   );
// };
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuth(VideoItemDetails));

/*
videoItemDetailsApiUrl

API: https://apis.ccbp.in/videos/:id
Example: https://apis.ccbp.in/videos/802fcd20-1490-43c5-9e66-ce6dfefb40d1
Method: GET
Description:
Returns a response containing the list of gaming videos

Response
{
  "video_details": {
    "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
    "title": "iB Hubs Announcement Event",
    "video_url": "https://www.youtube.com/watch?v=pT2ojWWjum8",
    "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
    "channel": {
      "name": "iB Hubs",
      "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
      "subscriber_count": "1M"
    },
    "view_count": "26K",
    "published_at": "Nov 29, 2016",
    "description": "iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest."
  }
}

*/
