import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Cancel = () => {
  return (
    <Link to="/">
      <button className="w-96 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold">
        Cancel
      </button>
    </Link>
  );
};

export default Cancel;
