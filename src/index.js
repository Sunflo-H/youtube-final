import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import Detail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:keyword",
        element: <Videos />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <Detail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * 헤더를 항상 보여준다.
 * 메인 페이지 : "/" or "/videos"
 * 검색 후 페이지 : "/videos/:keyword"
 * 디테일 페이지 : "/videos/watch/:videoId"
 */

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
