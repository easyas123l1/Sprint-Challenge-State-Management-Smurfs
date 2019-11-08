import axios from 'axios';
export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';

export const smurfLoading = () => ( {type: FETCH_SMURF_LOADING} );
export const smurfLoadSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
})
export const smurfLoadFailure = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
})

export function fetchSmurf() {

  return function(dispatch) {
    dispatch(smurfLoading());

    return axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      // console.log('servers response', response);
      return response.data})
    .then(response2 => dispatch(smurfLoadSuccess(response2)))
    .catch(error => dispatch(smurfLoadFailure(error)));
  }
}

export function addSmurf(name, age, height) {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios.post(`http://localhost:3333/smurfs`, {
      name: name,
      age: age,
      height: height
    })
    .then(response => {
      console.log(response);
      dispatch(smurfLoadSuccess(response.data))
    })
    .catch(error => dispatch(smurfLoadFailure(error)));
  }
}

export function removeSmurf(id) {
  console.log(id);
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch(smurfLoadSuccess(response.data))
    })
    .catch(error => dispatch(smurfLoadFailure(error)));
  }
}