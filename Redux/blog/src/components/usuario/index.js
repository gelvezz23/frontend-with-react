import React, {Component} from 'react';

import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions'
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla'

import './../../css/index.css';
import './../../css/iconos.css';


class Usuarios extends Component {

   componentDidMount(){
     this.props.traerTodos()
  }

 
  ponerContenido = () => {
    if (this.props.cargando) {
			return <Spinner />;
    }
    
    if(this.props.error){
      return <Fatal mensaje={ this.props.error } />;
    }else{
      return(
        <div>
          <h1>Usuarios</h1>
          <Tabla/>
        </div>
          
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
  return reducers.usuarioReducer

}
export default connect(mapStateToProps,usuariosActions)(Usuarios);