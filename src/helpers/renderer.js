import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import Html from "./Html";
import { ServerStyleSheet } from "styled-components"; // <-- importing ServerStyleSheet

export default (req, store, context) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )
  );

  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  const title = "Styled Components";

  console.log(store.getState());
  console.log("renderer")

  return Html({ content, styles, title, store });
};
