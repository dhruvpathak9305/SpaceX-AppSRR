import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  console.log(staticContext);
  return (
    <div>
      <Helmet>
        <title>{`Not Found Page`}</title>
        <meta property="og:title" content="Not Found Page" />
      </Helmet>
      <h1>Ooooops, routes not found.</h1>
    </div>
  );
};

export default {
  component: NotFoundPage,
};
