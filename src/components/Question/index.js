import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';
import { Title, Options } from './styles';

function Question({ question, index }) {
  const options = Object.entries(question.options);

  return (
    <>
      <Title>{question.title}</Title>
      <Options>
        {
          options.map((option) => {
            const [value, label] = option;
            const key = `${index}-${value}`;

            return <Option key={key} value={value} label={label} />;
          })
        }
      </Options>
    </>
  );
}

export default Question;

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
