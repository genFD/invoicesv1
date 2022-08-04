import React from 'react';

const Error = ({ street, errorStreet, city, errorCity }) => {
  // why props?
  // show/hide error when user enters a value
  return (
    <small
      className={`text-EC5757 text-body-1  ${
        (!street && errorStreet) || (!city && errorCity ? 'block' : 'hidden')
      }`}
    >
      Can’t be empty
    </small>
  );
};

export default Error;
