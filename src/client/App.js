import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import styled from "styled-components";

// Our single Styled Component definition
const AppContainer = styled.div`
  background-color: #f2f2f2;
`;

const App = ({ route }) => {
  return (
    <AppContainer>
      <Header />
      {renderRoutes(route.routes)}
    </AppContainer>
  );
};

export default {
  component: App,
};
