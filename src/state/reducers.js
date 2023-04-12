import { SAVE_VIDEO, DELETE_VIDEO } from "./actions";

const initialState = {
  saved_videos: [],
};

export function SavedVideosReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_VIDEO:
      return {
        ...state,
        saved_videos: [...state.saved_videos, action.payload],
      };
    case DELETE_VIDEO:
      return {
        ...state,
        saved_videos: state.saved_videos.filter(
          (video) => video.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
