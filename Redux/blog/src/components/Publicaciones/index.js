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

	ponerPublicaciones= () =>{
		const {
			usuarioReducer,
			usuarioReducer: { usuario },
			publicacionesReducer,
			publicacionesReducer:{ publicaciones },
			match: {params: { key } }
		} = this.props;	

		if(!usuario.length) return null;
		if(usuarioReducer.error) return null;
		if(publicacionesReducer.cargando){
			return <Spinner/>
		}
		if(publicacionesReducer.error){
			return <Fatal mensaje={publicacionesReducer.error}/>
		}
		if(!publicaciones.length){
			return null;
		}
		if(!('publicaciones_key' in usuario[key])){
			return null;
		}

		const {publicaciones_key} = usuario[key]
		return publicaciones[publicaciones_key].map((publicacion) =>{
			return(
			<div className="pub_titulo">
				<h2>
					{publicacion.title}	
				</h2>
				<h3>
					{publicacion.body}
				</h3>
			</div>
			)
		})




	}

	render() {
		console.log(this.props);
		



		return (
			<div className="margen">
				{ this.props.match.params.key }
				{ this.ponerUsuario()}
				{ this.ponerPublicaciones() }
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
