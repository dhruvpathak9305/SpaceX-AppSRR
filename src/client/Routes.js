// import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaunchesListPage from "./pages/LaunchesListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        path: "/launches",
        ...LaunchesListPage,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
