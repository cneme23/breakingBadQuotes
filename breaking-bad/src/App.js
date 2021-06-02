import {useState} from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2 px solid black;
`;

function App() {
  //state de frases
  
  
  
  //Consultar Api I
  const consultarAPI = () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = api.then((respuesta) => respuesta.json());
    frase.then((resultado) => console.log(resultado));
  };
//Consultar Api II
  // const consultarAPI = async () => {
  //   const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const frase = await api.json();
  //   console.log(frase[0]);
  // };

  return (
    <Contenedor>
      <Boton onClick={consultarAPI}>
        {/* onClick= {()=> consultarAPI()} -------> Esta seria la forma alternativa para que se ejecute la funcion cuando ocurra el evento */}
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
