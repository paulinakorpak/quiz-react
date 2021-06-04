import React from 'react';
import {
  Section, Box, Text, Score,
} from './styles';

function Result() {
  return (
    <Section>
      <Box>
        <Text>Gratulacje</Text>
        <hr />
        <Score>
          Twój wynik to:
          <strong> X </strong>
          punktów
        </Score>
      </Box>
    </Section>
  );
}

export default Result;
