import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Andar1 from "./routes/Andar1";
import Post from "./routes/Post";
import Admin from "./routes/Admin";
import Admin2 from "./routes/Admin2";
import Admin3 from "./routes/Admin3";
import EditPost from "./routes/EditPost";
import EditPost2 from "./routes/EditPost2";
import EditPost3 from "./routes/EditPost3";
import Andar3 from "./routes/Andar3";
import Andar2 from "./routes/Andar2";
import NewPost from "./routes/NewPost";
import NewPost2 from "./routes/NewPost2";
import NewPost3 from "./routes/NewPost3";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Andar1 />,
      },
      {
        path: "/andar2",
        element: <Andar2 />,
      },
      {
        path: "/andar3",
        element: <Andar3 />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin2",
        element: <Admin2 />,
      },
      {
        path: "/admin3",
        element: <Admin3 />,
      },
      {
        path: "/Post",
        element: <Post />,

      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
      {
        path: "/posts2/edit/:id",
        element: <EditPost2 />,
      },
      {
        path: "/posts3/edit/:id",
        element: <EditPost3 />,
      },

      {
        path: "/NewPost",
        element: <NewPost />,
      },
      {
        path: "/NewPost2",
        element: <NewPost2 />,
      },
      {
        path: "/NewPost3",
        element: <NewPost3 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

