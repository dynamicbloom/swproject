import React from 'react';

const Person = props => {
  const { match } = props;
  const { params } = match;
  const { personId } = params;

  return <div>{`This is the person page for person #${personId}`}</div>;
};

export default Person;