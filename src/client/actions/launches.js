import axios from "axios";

export const FETCH_LAUNCHES = "fetch_launches";

export const fetchLaunches = (value = 1) => async (dispatch) => {
  const res = await axios.get(
    `https://api.spacexdata.com/v3/launches?limit=100`
  );

  const payload = res.data.map((data) => ({
    flight_number: data.flight_number,
    mission_name: data.mission_name ? data.mission_name : "Not Present",
    mission_id: data.mission_id[0] ? data.mission_id[0] : "Not Present",
    launch_year: data.launch_year ? data.launch_year : "2014",
    launch_success: data.launch_success ? "Launch Success" : "Launch Failure",
    land_success: data.rocket.first_stage.cores[0].land_success
      ? "Land Success"
      : "Land Failure",
    img: data.links.mission_patch
      ? data.links.mission_patch
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",
    img_small: data.links.mission_patch_small
      ? data.links.mission_patch_small
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",
  }));

  dispatch({
    type: FETCH_LAUNCHES,
    payload: payload,
  });
};
