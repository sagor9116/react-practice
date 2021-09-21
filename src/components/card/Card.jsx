import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({children,title,details}) => {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  )
}

export default Card;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  details: null,
}