import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function PostsList() {
  // const { state, dispatch } = useContext(PostsContext);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const { title, body } = event.target.elements;
      dispatch({
        type: "ADD_POST",
        payload: {
          id: Date.now(),
          title: title.value,
          body: body.value,
        },
      });

      event.target.reset();
    },
    [dispatch]
  );

  return (
    <div>
      <h1>All Posts</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </fieldset>

        <fieldset>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" />
        </fieldset>

        <button type="submit">Add Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
