import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Empty Walls", duration: "3:50" },
    { title: "Metro", duration: "2:59" },
    { title: "Snowblind", duration: "4:40" },
    { title: "Through the Fire and the Flames", duration: "7:22" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
