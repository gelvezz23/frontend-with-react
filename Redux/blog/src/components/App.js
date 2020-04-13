import React from 'react';




const App = () => {

  const ponerFilas = () =>[
    <tr>
      <td>Carlos</td>
      <td>carlos@devhome.dev</td>
      <td>devhome.dev</td>
    </tr>,
    <tr>
      <td>Carlos</td>
      <td>carlos@devhome.dev</td>
      <td>devhome.dev</td>
    </tr>
  ]

  return (
    <div className="margen">
      <table className="tabla">
          <thead>
            <tr>
              <th>nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {ponerFilas()}
          </tbody>
      </table>
    </div>
  );
}

export default App;
