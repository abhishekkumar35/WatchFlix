export const SAVE_VIDEO = "SAVE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";

export function save_videoFn(video) {
  return { type: SAVE_VIDEO, payload: video };
}
export function delete_video(video) {
  return { type: DELETE_VIDEO, payload: video };
}
