import React, { useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #f6931a;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bf6900;
    cursor: pointer;
  }
`;
const Label = styled.label`
    font-family: 'Bebas Neue', cursivel;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;
const Input = styled.input`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;
const Formulario = ({ sendKg, sendLb }) => {
  const [ kg, setKg ] = useState(0);
  const [ lb, setLb ] = useState(0);
  const [ error , setError ] = useState({exist: false, description: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(kg === '') {setKg(0)}
    if(lb === '') {setLb(0)}

    if ( parseFloat(kg) < 0 || parseFloat(lb) < 0 ) {
      setError({ exist: true, description: "Ingresa números positivos" });
      return;
    }
    
    setError({ exist: false, description: "" });
    sendKg(parseFloat(kg));
    sendLb(parseFloat(lb));
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative mb-2">
      {error.exist ? (
        <Error setError={setError} description={error.description} />
      ) : null}
      <div class="m-3">
        <Label>Kg</Label>
        <Input onChange={(e) => setKg(e.target.value)} value={kg}></Input>
      </div>
      <div class="m-3">
      <Label>Lb</Label>
      <Input onChange={(e) => setLb(e.target.value)} value={lb}></Input>
      </div>
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
