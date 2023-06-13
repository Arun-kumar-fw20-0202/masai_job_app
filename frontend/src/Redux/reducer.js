import {
  ADD_JOB_SUCCESS,
  GET_JOB_SUCCESS,
  JOB_FAILURE,
  JOB_REQUEST,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  jobs: [],
};
export const jobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case JOB_REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    //
    case GET_JOB_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        jobs: (state.jobs = payload),
      };
    case JOB_FAILURE:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    case ADD_JOB_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = false),
        jobs: [...state.jobs, payload],
      };
  }
};
