import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
import SavedVideos from "./components/SavedVideos";
import Gaming from "./components/Gaming";
import Trending from "./components/Trending";
import VideoItemDetails from "./components/VideoItemDetails";
import { BallTriangle } from "react-loader-spinner";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/saved-videos",
        element: <SavedVideos />,
      },
      {
        path: "/videos/:id",
        element: <VideoItemDetails />,
      },
    ],
  },
]);
