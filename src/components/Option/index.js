import React from 'react';
import { ListItem, Label, Input } from './styles';

function Option() {
  return (
    <ListItem>
      <Label htmlFor="a">
        <Input type="radio" id="a" />
        odpowiedź
      </Label>
    </ListItem>
  );
}

export default Option;
