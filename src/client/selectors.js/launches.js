// import moment from 'moment';

// Get visible expenses

export default (launches, { year, launch, landing, }) => {
  return launches.filter((launch) => {

    const yearMatch = year ? year===launch.launch_year : true;
    const launchMatch = launch ? launch===launch.success: true;
    const landingMatch = landing? landing===launch.rocket.first_stage.cores[0].land_success:true;

    return yearMatch && launchMatch && landingMatch;
  })
};