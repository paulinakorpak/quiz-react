import React from 'react';
import PropTypes from 'prop-types';
import {
  Section, Box, Text, Score,
} from './styles';

function Result({ points }) {
  let title;
  if (points <= 3) {
    title = 'Oj, słabo :-(';
  } else if (points <= 5) {
    title = 'Mogło być lepiej...';
  } else if (points <= 8) {
    title = 'Dobra robota!';
  } else {
    title = 'Świetnie!';
  }

  let pointsText;
  if (points === 1) {
    pointsText = 'punkt';
  } else if (points > 1 && points < 5) {
    pointsText = 'punkty';
  } else {
    pointsText = 'punktów';
  }

  return (
    <Section>
      <Box>
        <Text>{title}</Text>
        <hr />
        <Score>
          Twój wynik to:
          <strong>{ ` ${points} ` }</strong>
          {pointsText}
        </Score>
      </Box>
    </Section>
  );
}

export default Result;

Result.propTypes = {
  points: PropTypes.number.isRequired,
};
