import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';


const {traerTodos: usuariosTraerTodo} = usuariosActions
const {traerTodos: publicacionesTraerTodo} = publicacionesActions


class Publicaciones extends Component {

	componentDidMount() {
		if (!this.props.usuarioReducer.usuario.length) {
			this.props.usuariosTraerTodo();
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className="margen">
				<h1>
					Publicaciones de 
				</h1>
				{ this.props.match.params.key }
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
    publicacionesTraerTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
