import axios from 'axios';

// Define the base API URL
// const API_URL = 'https://slider-fun.onrender.com/api';
const API_URL = 'http://localhost:9090/api';

// Redux action types
export const ActionTypes = {
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
}

export const fetchAllPost = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/posts/all`);

    if (response.status === 200) {
      console.log(response.data)

      dispatch({
        type: ActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: ActionTypes.FETCH_POSTS_ERROR,
        payload: `Error: ${response.status} - ${response.statusText}`,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POSTS_ERROR,
      payload: 'There was an error fetching the photos: ' + error,
    });
  }
};