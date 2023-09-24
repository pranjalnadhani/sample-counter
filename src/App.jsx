import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CounterClass } from "./components/Counter/CounterClass";
import { CounterFunction } from "./components/Counter/CounterFunction";
import { PostDetails } from "./PostDetails";
import { Provider } from "react-redux";
import { PostsProvider } from "./PostsContext";
import { PostsList } from "./PostsList";
import { TodoList } from "./TodoList";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PostsProvider>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
            <Route path="/timer" lazy={() => import("./components/CountdownTimer/CountdownTimer")} />
            <Route
              path="/counter-function"
              element={
                <CounterFunction
                  count={10}
                  step={5}
                  FinishComponent={<div>You have reached the end</div>}
                />
              }
            />
            <Route
              path="/counter-class"
              element={
                <CounterClass
                  count={10}
                  step={5}
                  FinishComponent={<div>You have reached the end</div>}
                />
              }
            />
          </Routes>
        </PostsProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
