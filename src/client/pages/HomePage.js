import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions/launches";
import { Helmet } from "react-helmet";
import LaunchCard from "../components/LaunchCard";
import styled from "styled-components";
import Filters from "../components/Filters";
import Launches from "../components/Launches";

const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #f2f2f2;
`;

const LaunchesDiv = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-row-gap: 10px;
  grid-column-gap: 15px;
  background-color: #f2f2f2;
  justify-items: center;
`;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.launches.length} Launches Loaded`}</title>
        <meta property="og:title" content="Launches App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <HomeDiv>
          <Filters />
          <LaunchesDiv>
            <Launches launches={this.props.launches} />
          </LaunchesDiv>
        </HomeDiv>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { launches: state.launches };
}

function loadData(store) {
  return store.dispatch(fetchLaunches());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchLaunches })(HomePage),
};
