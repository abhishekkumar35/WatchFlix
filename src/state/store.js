import { createStore } from "redux";
import { SavedVideosReducer } from "./reducers";

export const store = createStore(SavedVideosReducer);
