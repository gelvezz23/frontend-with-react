import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as usuarioActions from '../../actions/usuariosActions'
import './../../css/index.css'


class Publicaciones extends Component {
    componentDidMount(){
        if(!this.props.usuarioReducer.usuario.length){
            this.props.traerTodos()
        }
    }
    


    render(){
        console.log(this.props)
        return(
            <div className="margen">
                <h1>Publicaciones de </h1>
                {this.props.match.params.key}
            </div>
        )
    }
}

const mapStateToProps = ({usuarioReducer, PublicacionesReducer}) => {
    return {
        usuarioReducer, 
        PublicacionesReducer
    }
  
  }

export default connect(mapStateToProps,usuarioActions)(Publicaciones);
