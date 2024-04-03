import { produce } from 'immer';
import { ActionTypes } from '../actions/postActions';

const initialState = {
  "list": [],
}

const postReducer = produce((draftState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_SUCCESS:
      draftState.list = action.payload;
      break;
    case ActionTypes.FETCH_POSTS_ERROR:
      console.log("fetch posts error")
      break;
    case ActionTypes.CREATE_POST:
      draftState.list.push(action.payload);
      break;
    default:
      return draftState;
  }
}, initialState);

export default postReducer;