import {useState,useEffect} from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase"


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
  transition:background-size .8s ease;
  
  :hover{
    cursor:pointer;
    background-size: 400;
  }

`;

function App() {
  //state de frases
  const [frase, guardarFrase]= useState({});
  
  
  //Consultar Api I
  // const consultarAPI = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const frase = api.then((respuesta) => respuesta.json());
  //   frase.then((resultado) => console.log(resultado));
  // };
//Consultar Api II
  const consultarAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await api.json();
    guardarFrase(frase[0]);
  };
  
  //Cargar una frase de manera automatica cuando entremos a la app
  useEffect( ()=>{
    consultarAPI()
  },[]);

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton onClick={consultarAPI}>
        {/* onClick= {()=> consultarAPI()} -------> Esta seria la forma alternativa para que se ejecute la funcion cuando ocurra el evento */}
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
