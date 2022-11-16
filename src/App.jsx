import React from 'react';
import './App.css';

const App = () => {
  const user = {nombre:"pedro",apellido:"Parker"}
  return (
    <div>
       <h1 className='titulo parrafo'>Hola Bienvenidos a la pagina de compras de Santa Paz</h1>
       <p>Hola {user.nombre} </p>
       <p>{user.apellido} </p>
       <input type="text" />
    </div>

  );
}

export default App;
