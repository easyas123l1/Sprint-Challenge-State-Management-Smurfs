import React from 'react';
import { connect } from 'react-redux';


const SmurfForm = () => {
  return (
    <div>
      <form>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='age' placeholder='age' />
        <input type='text' name='height' placeholder='height' />
        <button>Add Smurf</button> 
      </form>
    </div>
  );
};

export default SmurfForm;