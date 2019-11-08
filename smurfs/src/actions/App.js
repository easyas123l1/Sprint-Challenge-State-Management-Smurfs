export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';

export const smurfLoading = () => {( type: FETCH_SMURF_LOADING )};
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

    return fetch(`http://localhost:3333/smurfs`)
    .then(response => response.json())
    .then(json => dispatch(smurfLoadSuccess(json.results)))
    .catch(error => dispatch(smurfLoadFailure(error)));
  }
}