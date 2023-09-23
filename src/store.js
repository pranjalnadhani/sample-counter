import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  preloadedState: {
    posts: [],
  },
  reducer: function (state, action) {
    switch (action.type) {
      case "ADD_POST":
        return {
          ...state,
          posts: [action.payload, ...state.posts],
        };
      case "DELETE_POST":
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  },
});
