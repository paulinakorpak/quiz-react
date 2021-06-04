import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Label, Input } from './styles';

function Option({ value, label }) {
  return (
    <ListItem>
      <Label htmlFor={value}>
        <Input type="radio" id={value} />
        {label}
      </Label>
    </ListItem>
  );
}

export default Option;

Option.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
