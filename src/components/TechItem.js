import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li className="taskItem">
      <div className="taskItem-name">{tech}</div>
      <div className="taskItem-button">
        <button type="button" onClick={onDelete}>Remove</button>
      </div>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Default Tech'
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;