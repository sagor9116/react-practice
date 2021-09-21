import React from 'react';
import PropTypes from 'prop-types';
import './animaDetails.css';

const AnimalDetails = ({diet,scientificName}) => {

  function convertFood(food) {
    switch(food) {
      case 'insects' : 
        return '🐜';
      case 'plants' :
        return '🌱';
      case 'meat' : 
        default:
        return '🍖';
    }
  }

  return (
    <div className="details">
       <h4>Details</h4>
       <div>
        Scientific Name: {scientificName}
      </div>
       <div>
        Diet: {diet.map((dietFood)=> convertFood(dietFood)).join(' ')}
       </div>
    </div>
  )
}

export default AnimalDetails;

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName:PropTypes.string.isRequired
}