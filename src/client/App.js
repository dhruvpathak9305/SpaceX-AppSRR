import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
// import styled from 'styled-components';


const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
