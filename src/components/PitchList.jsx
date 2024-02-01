import PropTypes from 'prop-types';

function PitchList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.hours_price}</td>
    </tr>
  );
}

PitchList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.number,
  hours_price: PropTypes.number
};

export default PitchList;