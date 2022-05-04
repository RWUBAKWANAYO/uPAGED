import { selectJobsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case selectJobsTypes.SELECT_JOBS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: payload,
      };
    case selectJobsTypes.SELECT_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    default:
      return null;
  }
};
