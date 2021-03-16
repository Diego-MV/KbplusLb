import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinkit from './components/Spinkit';

import imagen from './lift.png';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  margin-top: 5rem;
  align-items: center;
`;
const Heading = styled.div`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #f6931a;
    display: block;
  }
`;
function App() {
  const [loading, setLoading] = useState(false);
  const [ kg, setKg ] = useState(0);
  const [ lb, setLb ] = useState(0);
  const [ resultado, setResultado ] = useState(0);
  
  useEffect(() => {
    const Calculo = () => {
      const lbTokg = parseFloat(lb) * 0.454;
      const res = parseFloat(kg) + parseFloat(lbTokg);
      if(isNaN(res)){
        setResultado(0);
        return;
      }
      setResultado(  )
    }
    if (kg === 0 || lb === 0 || kg === "" || lb === "") return 
    else {
      setLoading(true);
      setTimeout( () => {
        Calculo()
        setLoading(false);
      }, 500)
    }
  }, [resultado, kg, lb])
   
  
  return (
    <div className="container-fluid w\-100">
      <Contenedor className='row'>
        <div className="d-none d-sm-none d-lg-block d-md-block d-xl-block col-lg-4">
          <Imagen  src={imagen} alt="img lift" />
        </div>
        {/* <div className="col-12 d-block d-sm-block d-md-none w-100 d-flex justify-content-center align-items-center">
          <Imagen height={100} src={imagen} alt="img cripto" />
        </div> */}

        <div className="col-8 w-100">
          <Heading>Calcula el peso de la barra</Heading>
          <Formulario sendKg={setKg} sendLb={setLb}/>
          {loading
            ? <Spinkit />
            : <Resultado resultado={resultado}/>}
        </div>
      </Contenedor>
    </div>
  );
}

export default App;
