import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions";
import { Helmet } from "react-helmet";

class LaunchesListPage extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  //helper function to create the list of launches.
  renderLaunches() {
    return this.props.launches.map((launch) => {
      return <li key={launch.flight_number}>{launch.mission_name}</li>;
    });
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
        Here's is big list of Launches.
        <ul>{this.renderLaunches()}</ul>
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
  component: connect(mapStateToProps, { fetchLaunches })(LaunchesListPage),
};
