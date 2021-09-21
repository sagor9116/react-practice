import PropTypes from 'prop-types';
import AnimalDetails from '../animalDetails/AnimalDetails';
import Card from '../card/Card';

const AnimalCard = ({name,size, ...props}) => {
  return (
    <Card title = "Animal" details = {<em>Mammals</em> }>
      <h1>Name : {name}</h1>
      <div> Size: {size}</div>
      <AnimalDetails {...props} />
    </Card>
  )
}

export default AnimalCard;

AnimalCard.propTypes = {
  name : PropTypes.string.isRequired,
  size : PropTypes.number.isRequired,
}
