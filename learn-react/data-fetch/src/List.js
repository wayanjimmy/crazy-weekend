import React from 'react';
import PropTypes from 'prop-types';
import withData from './withData';

const List = ({ data: gists }) => (
  <ul>
  {gists.map(gist => <li key={gist.id}>{gist.description}</li>)}
  </ul>
);

List.propTypes = {
  data: PropTypes.array
};

const withGists = withData(props => `https://api.github.com/users/${props.username}/gists`);

export default withGists(List);
