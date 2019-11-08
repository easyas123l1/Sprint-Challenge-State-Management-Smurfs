import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/App';

const SmurfForm = props => {
  const [name, setName] = useState ('');
  const [age, setAge] = useState ('');
  const [height, setHeight] = useState('');

  const changeName = e => {
    setName(e.target.value)
  }

  const changeAge = e => {
    setAge(e.target.value)
  }

  const changeHeight = e => {
    setHeight(e.target.value)
  }

  return (
    <div>
      <form onSubmit={() => props.dispatch(addSmurf(name, age, height))}>
        <input type='text' name='name' placeholder='name' onChange={changeName} value={name} />
        <input type='text' name='age' placeholder='age' onChange={changeAge} value={age} />
        <input type='text' name='height' placeholder='height' onChange={changeHeight} value={height} />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default connect(state => {
  return state;
})(SmurfForm);