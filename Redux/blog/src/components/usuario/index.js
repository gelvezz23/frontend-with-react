import React, {Component} from 'react';

import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions'
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

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

  ponerContenido = () => {
    if (this.props.cargando) {
			return <Spinner />;
    }
    
    if(this.props.error){
      return <Fatal mensaje={ this.props.error } />;
    }else{
      return(
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
  
      )
    }

   
  }
    render(){
      console.log(this.props.error)
      console.log(this.props.cargando)
        return (
          <div className="margen">
            { this.ponerContenido() }
          </div>
        );
    }
}

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducers

}
export default connect(mapStateToProps,usuariosActions)(Usuarios);