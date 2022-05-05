import selectJobsInitialState from '../../store/initialState';
import selectJobsReducer from './selectJobsReducer';

export default (state = selectJobsInitialState, action) => {
  const selectJobs = selectJobsReducer(state, action);
  return (selectJobs || state);
};
