import React from "react";
import { Helmet } from "react-helmet";
import Filters from "../components/Filters";
import LaunchesListPage from "./LaunchesListPage";
import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
`;

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>{`Home Page`}</title>
        <meta property="og:title" content="Home Page" />
      </Helmet>
      <HomeDiv>
        <Filters/>
      </HomeDiv>
    </div>
  );
}
export default {
  component: HomePage,
};
