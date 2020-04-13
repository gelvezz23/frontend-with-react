import React, {Component} from 'react';

class App extends Component {

  ponerFilas = () =>[
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
    render(){
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
                  { this.ponerFilas() }
                </tbody>
            </table>
          </div>
        );
    }
}
export default App;
