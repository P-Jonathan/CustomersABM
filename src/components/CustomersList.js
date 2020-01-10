import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from "./CustomerListItem";

import './../index.css';

const CustomersList = ({customers, urlPath}) => {
  return (
    <div className="customers-list">
      {
        customers.map(({name, dni}) =>
          <CustomerListItem
            key={dni}
            deleteAction={'delete'}
            dni={dni}
            editAction={'edit'}
            name={name}
            urlPath={urlPath}
          />
        )
      }
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomersList;