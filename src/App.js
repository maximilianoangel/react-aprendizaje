import logo from './logo.svg';
import React from 'react';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
      <section>
        <Componente msg="Hola soy un componente por un mensaje porop"></Componente>
        <Propiedades cadena="Esto es una cadena de texto" 
        numero={19} 
        booleano={true} 
        arreglo={[1,2,3]} 
        objeto={{nombre:"jon",correo:"probanding"}} 
        elementoReact={<i>Esto es un elemento React</i>} 
        funcion={(num)=>num*num}
        componenteReact={<Componente msg="Soy un componente enviado como prop"></Componente>}
        >
        </Propiedades>
        <hr/>
        <Estado></Estado>
        <hr/>
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr/>
        <RenderizadoElementos></RenderizadoElementos>
        <hr/>
        <Eventos></Eventos>
      </section>
      </header>
    </div>
  );
}

export default App;
