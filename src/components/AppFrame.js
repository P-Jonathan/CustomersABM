import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";

import './../index.css';

const AppFrame = ({header, body, footer}) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={header}/>
        <div className="app-frame-body">{body}</div>
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default AppFrame;