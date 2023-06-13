import axios from "axios";
import {
  ADD_JOB_SUCCESS,
  GET_JOB_SUCCESS,
  JOB_FAILURE,
  JOB_REQUEST,
} from "./actionType";

export const jobRequest = () => {
  return { type: JOB_REQUEST };
};
export const jobFailure = () => {
  return { type: JOB_FAILURE };
};
export const getjobSuccess = (payload) => {
  return { type: GET_JOB_SUCCESS, payload };
};
//
export const addJobSucess = (payload) => {
  return { type: ADD_JOB_SUCCESS, payload };
};
//
export const getJob = (dispatch) => {
  dispatch(jobRequest());
  axios
    .get("http://localhost:8080/job")
    .then((res) => {
      dispatch(getjobSuccess(res.data));
    })
    .catch((err) => {
      dispatch(jobFailure());
      console.log(err);
    });
};

//
export const addJob = (data) => (dispatch) => {
  //   dispatch(jobRequest());
  axios
    .post(`http://localhost:8080/job/add`, data)
    .then((res) => {
      dispatch(addJobSucess(res.data));
      console.log("job added successfully!!");
    })
    .catch((err) => {
      //   dispatch(jobFailure());
      console.log(err);
    });
};
