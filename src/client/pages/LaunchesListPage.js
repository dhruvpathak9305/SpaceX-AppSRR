import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions";
import { Helmet } from "react-helmet";
import LaunchCard from "../components/LaunchCard";
import styled from "styled-components";
import Filters from "../components/Filters";

const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const LaunchesDiv = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-row-gap: 10px;
  grid-column-gap: 15px;
  background-color: green;
  justify-items: center;
`;

class LaunchesListPage extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  //helper function to create the list of launches.
  // renderLaunches() {
  //   return this.props.launches.map((launch) => {
  //     return <li key={launch.flight_number}>{launch.mission_name}</li>;
  //   });
  // }

  renderLaunches() {
   return this.props.launches.map((launch,index)=>{
     return (
            <LaunchCard
              key={launch.flight_number}
              index={index}
              mission_name={launch.mission_name}
              mission_id={launch.mission_id}
              launch_year={launch.launch_year}
              launch_success={launch.launch_success}
              land_success={launch.land_success}
              img={launch.img}
              img_small={launch.img_small}
            />
          );
   })
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
        <HomeDiv>
          <Filters />
          <LaunchesDiv>{this.renderLaunches()}</LaunchesDiv>
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
  component: connect(mapStateToProps, { fetchLaunches })(LaunchesListPage),
};

// renderLaunches() {
//   return this.props.launches.map((launch, index) => {
//     const mission_name = launch.mission_name
//       ? launch.mission_name
//       : "Not Present";
//     const mission_id = launch.mission_id[0]
//       ? launch.mission_id[0]
//       : "Not Present";
//     const launch_year = launch.launch_year ? launch.launch_year : "2014";
//     const launch_success = launch.launch_success
//       ? "Launch Success"
//       : "Launch Failure";
//     const land_success = launch.rocket.first_stage.cores[0].land_success
//       ? "Land Success"
//       : "Land Failure";
//     const img = launch.links.mission_patch
//       ? launch.links.mission_patch
//       : "Not Present";
//     const img_small = launch.links.mission_patch_small
//       ? launch.links.mission_patch_small
//       : "Not Present";

//     return (
//       <LaunchCard
//         key={launch.flight_number}
//         index={index}
//         mission_name={mission_name}
//         mission_id={mission_id}
//         launch_year={launch_year}
//         launch_success={launch_success}
//         land_success={land_success}
//         img={img}
//         img_small={img_small}
//       />
//     );
//   });
// }
