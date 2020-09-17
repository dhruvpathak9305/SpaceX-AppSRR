import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions/launches";
import { Helmet } from "react-helmet";
import LaunchCard from "../components/LaunchCard";
import styled from "styled-components";
import Filters from "../components/Filters";
import Launches from "../components/Launches";
import { withRouter } from "react-router";

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
  constructor(props) {
    super(props);
    {
      // console.log("constructor");
      // // console.log(props);
    }
    this.state = {
      year: "",
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("5555555555555555555555555555555555555");
    console.log(this.props.location.search);
    console.log(this.props.location);
    console.log("5555555555555555555555555555555555555");
    if (this.props)
      this.props.fetchLaunches(
        "https://api.spacexdata.com/v3/launches?limit=10&launch_success=true"
      );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.location.pathname === nextProps.location.pathname &&
      this.props.location.search === nextProps.location.search
    ) {
      console.log("The Props are not changed in the CWRP");
      return;
    }

    let apiEndPoint = `https://api.spacexdata.com/v3/launches?limit=10&launch_success=true`;

    this.props.fetchLaunches({ apiEndPoint });
    console.log("The Props ARE changed in the CWRP");
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

function loadData(store, query) {
  let apiEndPoint = `https://api.spacexdata.com/v3/launches?limit=3&launch_success=true`;
  return store.dispatch(fetchLaunches({ apiEndPoint }));
}

export default {
  loadData,
  component: withRouter(connect(mapStateToProps, { fetchLaunches })(HomePage)),
};
