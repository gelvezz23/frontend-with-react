import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './../general/Spinner';
import Fatal from './../general/Fatal';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';


const {traerTodos: usuariosTraerTodo} = usuariosActions
const {traerPorUsuario: publicacionesTraerPorUsuario} = publicacionesActions


class Publicaciones extends Component {

	async componentDidMount() {
		const {
			usuariosTraerTodo,
			publicacionesTraerPorUsuario,
			match:{ params: { key }}
		} = this.props


		if (!this.props.usuarioReducer.usuario.length) {
		    await	usuariosTraerTodo();
		}
		if (this.props.usuarioReducer.error){
			return;
		}

		if(!('publicaciones_key' in this.props.usuarioReducer.usuario[key])){
			await publicacionesTraerPorUsuario( key );
		}
            
	}

	ponerUsuario(){
		const {
			usuarioReducer,
			match:{ params: { key }}
		}= this.props
		if(usuarioReducer.error){
			return <Fatal mensaje={ usuarioReducer.error} />
		}

		if(!usuarioReducer.usuario.length || usuarioReducer.cargando){
			return <Spinner/>
		}
		const nombre = usuarioReducer.usuario[key].name;

		return(
			<h1>
				Publicaciones de { nombre }
			</h1>
		)
	}

	render() {
		console.log(this.props);
		



		return (
			<div className="margen">
				{ this.props.match.params.key }
				{ this.ponerUsuario()}
			</div>
		);
	}
}

const mapStateToProps = ({ usuarioReducer, publicacionesReducer }) => {
    return { 
        usuarioReducer, 
        publicacionesReducer 
    };
};

const mapDispatchToProps = {
    usuariosTraerTodo,
    publicacionesTraerPorUsuario
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
