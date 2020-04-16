import React, {Component} from 'react';

import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions'

class Usuarios extends Component {

   componentDidMount(){
     this.props.traerTodos()
  }

  ponerFilas = () =>{
    return(
      this.props.usuario.map(user => { 
        return(
            <tr key={user.id}>
              <td> {user.name} </td>
              <td> {user.email} </td>
              <td> {user.website} </td>
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

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducers

}
export default connect(mapStateToProps,usuariosActions)(Usuarios);