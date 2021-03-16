import React from "react";
import styled from '@emotion/styled';

const ErrorAlert = styled.div`
  position: absolute;
  top: -15%;
  left: 15%;
`;

const Error = ({setError,description}) => {
  const handleCloseError = () =>{
    setError({
      exist: false,
      description: ''
    })
  }

  return (
    <ErrorAlert className="alert alert-danger alert-dismissible fade show" role="alert">
  
      <strong>Ups!</strong> {description}.
      <button type="button" class="btn-close" onClick={() => handleCloseError()}></button>

    </ErrorAlert>
  );
};

export default Error;
