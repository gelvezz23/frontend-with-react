import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Usuarios extends Component {

/**async componentDidMount(){

  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      usuario:response.data
    })
}*/

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
export default connect(mapStateToProps,{/**Actions */})(Usuarios);