import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectOptions = ({ number , name, label , onChange, value}) => (



  <div className="selectInput">

    <select id={name} value={value} className="valueOfNewHero" name={name} onChange={onChange} >
      <option>{value}</option>
      {
        Array.from({ length: number }, (v, k) => k).map(arr =>(
        <option key={arr+1}>{arr+1}</option>
      ))


      }
    </select>
    <label htmlFor="name" style={{color:'grey', fontSize:'13px', margin:'0 0 0 50px'}}>{label}</label>

  </div>
);
export default CreateSelectOptions;

CreateSelectOptions.propTypes = {
  number: PropTypes.number.isRequired,
  label:PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,

};

CreateSelectOptions.defaultProps = {
  onChange: () => {},


}




