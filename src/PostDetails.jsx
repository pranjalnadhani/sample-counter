import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function PostDetails() {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === Number(postId))
  );

  // const { state } = useContext(PostsContext);

  // const post = state.posts.find((post) => post.id === Number(postId));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
