import axios from "axios";

export const FETCH_LAUNCHES = "fetch_launches";

export const fetchLaunches = () => async (dispatch) => {
  const res = await axios.get("https://api.spacexdata.com/v3/launches?limit=2");
  // console.log(res.data);
  const payload=res.data.map((data)=>({
    flight_number:data.flight_number,
    mission_name : data.mission_name? data.mission_name: "Not Present",
    mission_id : data.mission_id[0]? data.mission_id[0]: "Not Present",
    launch_year : data.launch_year ? data.launch_year : "2014",
    launch_success : data.launch_success? "Launch Success": "Launch Failure",
    land_success : data.rocket.first_stage.cores[0].land_success? "Land Success": "Land Failure",
    img : data.links.mission_patch? data.links.mission_patch: "Not Present",
    img_small : data.links.mission_patch_small? data.links.mission_patch_small: "Not Present"
  }))
  // console.log(payload);
  dispatch({
    type: FETCH_LAUNCHES,
    payload: payload,
  });
};
