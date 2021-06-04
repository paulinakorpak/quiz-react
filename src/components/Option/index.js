import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Label, Input } from './styles';

function Option({
  value, label, disabled, className, checkAnswer,
}) {
  const handleClick = (e) => {
    checkAnswer(e.target.value);
  };

  return (
    <ListItem className={className}>
      <Label htmlFor={value}>
        <Input type="radio" id={value} value={value} disabled={disabled} onClick={handleClick} />
        {label}
      </Label>
    </ListItem>
  );
}

export default Option;

Option.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};
