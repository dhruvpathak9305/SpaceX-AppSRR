import React from "react";
import { connect } from "react-redux";
import {
  setYearFilter,
  setLaunchFilter,
  setLandingFilter,
} from "../actions/filters";

export class EditLaunchFilters extends React.Component {
  onYearChange (e){
    this.props.setYearFilter(2004);
    console.log("Pathgak fkjehh");
  };
  onLaunchChange (e) {
    this.props.setLaunchFilter(e.target.value);
  };
  onLandingChange(e){
    this.props.setLandingFilter();
  };
  render() {
    return (
      <input
        type="text"
        className="text-input"
        placeholder="Search expenses"
        onChange={this.onYearChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setYearFilter: (year) => dispatch(setYearFilter(year)),
  setLaunchFilter: (launch) => dispatch(setLaunchFilter(launch)),
  setLandingFilter: (landing) => dispatch(setLandingFilter(landing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLaunchFilters);
