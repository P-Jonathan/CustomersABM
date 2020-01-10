import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({name, dni, age, onBack}) => (
  <div>
    <div className="customer-data">
      <h2>Customer data</h2>
      <div><strong>Name:</strong> <i>{name}</i></div>
      <div><strong>DNI:</strong> <i>{dni}</i></div>
      <div><strong>Age:</strong> <i>{age}</i></div>
    </div>
    <CustomersActions>
      <button onClick={onBack}>Back</button>
    </CustomersActions>
  </div>
);

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired
};

export default CustomerData;