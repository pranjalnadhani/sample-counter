import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

const InitialState = {
  posts: [],
};

export const PostsContext = createContext({
  state: InitialState,
  dispatch: () => {},
});

/**
 * action =>
 * {
 *   type: "ADD_POST",
 *   payload: {
 *     id: 2,
 *     title: "Your second post",
 *     body: "The quick brown fox jumps over the lazy dog",
 *   }
 * }
 * 
 * OR
 * 
 * {
 *   type: "DELETE_POST",
 *   payload: 2
 * }
 */
function ReducerFunction(state, action) {
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
}

export function PostsProvider(props) {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "Your first post",
  //     body: "The quick brown fox jumps over the lazy dog",
  //   },
  // ]);

  // const addPost = useCallback((post) => {
  //   setPosts((posts) => [post, ...posts]);
  // }, []);

  // const getPost = useCallback(
  //   (postId) => posts.find((post) => post.id === Number(postId)),
  //   [posts]
  // );

  const [state, dispatch] = useReducer(ReducerFunction, InitialState);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
}

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
