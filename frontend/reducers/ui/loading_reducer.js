import { UPDATE_LOADING } from "../../actions/loading_actions";


const loadingReducer = (state = true, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_LOADING:
      return action.value;
    default:
      return state;
  }
};

export default loadingReducer;
