// SET_YEAR_FILTER

export const SET_YEAR_FILTER = "setYearFilter";
export const setYearFilter = (year = "") => ({
  type: "SET_YEAR_FILTER",
  year,
});

// SET_LAUNCH_FILTER

export const SET_LAUNCH_FILTER = "setLaunchFilter";
export const setLaunchFilter = (launch = "") => ({
  type: "SET_LAUNCH_FILTER",
  launch,
});

// SET_LANDING_FILTER

export const SET_LANDING_FILTER = "setLandingFilter";
export const setLandingFilter = (landing = "") => ({
  type: "SET_LANDING_FILTER",
  landing,
});
