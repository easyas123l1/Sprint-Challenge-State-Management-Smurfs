import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, removeSmurf } from '../../actions/App';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div>
      <button onClick={() => props.dispatch(fetchSmurf())}>Get Smurfs</button>
      {props.isFetching && <span role='img' aria-label='loading'>🔃</span>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.smurf[0] ? props.smurf.map(s => (
          <li key={s.id}>
           <Smurf key={s.id} smurf={s} />
           <button onClick={() => props.dispatch(removeSmurf(s.id))}>Remove</button>
          </li>
        )) : <h1>No Smurfs (get smurfs or add smurf)</h1>
        }
      </ul>
    </div>
  );
};


export default connect(state => {
  return state;
})(SmurfList);