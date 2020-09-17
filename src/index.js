import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import React from "react";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const filters = {
    year: 2006,
    launch: "true",
    landing: "true",
  };
  const query = req.query;
  console.log("query" + JSON.stringify(query));
  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
  
  //Some logic to initialize and load data into store

  Routes[0].routes.forEach((r) => {
    r.queryParams = req.query;
  });

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, query) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = { requestQueryParams: req.query };
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
