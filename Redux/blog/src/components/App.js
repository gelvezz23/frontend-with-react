import React, {Component} from 'react';

class App extends Component {

constructor(){
    super();
    this.state = {
      usuario:[
        {
          "nombre":'carlos',
          "Correo":'carlos@devhome.dev',
          "Enlace":'devhome.dev',
        },
        {
          "nombre":'carlos',
          "Correo":'carlos@devhome.dev',
          "Enlace":'devhome.dev',
        },
      ]
    }
}

  ponerFilas = () =>{
    return(
      this.state.usuario.map(user => { 
        return(
            <tr>
              <td> {user.nombre} </td>
              <td> {user.Correo} </td>
              <td> {user.Enlace} </td>
            </tr>
        )
      })
    )
  }
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
