import React from 'react';
import uuid from 'uuid';

export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
);
