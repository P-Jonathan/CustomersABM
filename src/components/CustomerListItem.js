import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CustomerListItem = ({name, dni, urlPath, editAction, deleteAction}) => {
  return (
    <div className="customer-list-item">
      <div className="field">
        <Link to={`${urlPath}${dni}`}>
          <strong>{name}</strong>
        </Link>
      </div>
      <div className="field">
        <Link to={`${urlPath}${dni}/edit`}>
          {editAction}
        </Link>
      </div>
      <div className="field">
        <Link to={`${urlPath}${dni}/delete`}>
          {deleteAction}
        </Link>
      </div>
    </div>
  );
};

CustomerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired
};

export default CustomerListItem;