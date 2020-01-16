import React, {useState} from 'react';

// Componente: bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// Estado: 
// Propriedade: Informacoes que o componente pai passa para o componente filho

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() { 
    setCounter(counter + 1);
   }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
