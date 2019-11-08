import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../../actions/App';

const SmurfList = props => {
  console.log('Smurf', props);
  return (
    <div>
      <button onClick={() => props.dispatch(fetchSmurf())}>Get Smurf</button>
      {props.isFetching && <span role='img' aria-label='loading'>🔃</span>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.smurf.map(s => (
          <li key={s.id}>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const mapDispatchToProps = {
//   fetchSmurf
// }

export default connect(state => {
  console.log('mapStateToProps.STATE', state);
  return state;
})(SmurfList);