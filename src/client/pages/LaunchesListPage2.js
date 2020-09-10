import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions";

class LaunchesListPage extends Component {
  componentDidMount() {
    console.log("Component DID MOUNT!");
    this.props.fetchLaunches();
  }

  //helper function to create the list of launches.
  renderLaunches() {
    return this.props.launches.map((launch) => {
      return <li key={launch.flight_number}>{launch.mission_name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here is a big list of launches Dhruv.
        <ul>{this.renderLaunches()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  // console.log("Im tryning to load some data");
  return store.dispatch(fetchLaunches());
}

//state has users list that needs to be fetched
function mapStateToProps(state) {
  return { launches: state.launches };
}

export default {
  component: connect(mapStateToProps, { fetchLaunches })(LaunchesListPage),
  loadData,
};
