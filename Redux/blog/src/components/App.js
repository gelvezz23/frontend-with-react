import React from 'react';

const App = () => {
  return (
    <div className="margen">
      <table className="tabla">
          <thead>
            <tr>
              <td>nombre</td>
              <td>Correo</td>
              <td>Enlace</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos</td>
              <td>carlos@devhome.dev</td>
              <td>devhome.dev</td>
            </tr>
            <tr>
              <td>Carlos</td>
              <td>carlos@devhome.dev</td>
              <td>devhome.dev</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default App;
