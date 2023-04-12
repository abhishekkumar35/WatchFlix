import React from "react";
import UiCard from "../UI/UiCard";
import WithAuth from "./WithAuth";

type Props = {};

const SavedVideos = (props: Props) => {
  // const [savedvideos,setSavedvideos] = useState<videos:any|null>(null)
  // const jwt_token = localStorage.getItem('jwt_token')
  // useEffect(()=>{
  //   axios.get(url)
  // },[jwt_token])
  return (
    <UiCard>
      <div className="savedvideos__container"></div>
    </UiCard>
  );
};

export default WithAuth(SavedVideos);
