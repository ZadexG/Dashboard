import PropTypes from 'prop-types';

function PitchList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.player}</td>
      <td>{props.length}</td>
    </tr>
  );
}

PitchList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  player: PropTypes.number,
  length: PropTypes.number
};

export default PitchList;