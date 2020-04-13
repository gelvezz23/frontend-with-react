import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

constructor(){
    super();
    this.state = {
      usuario:[]
    }
}

async componentDidMount(){

  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      usuario:response.data
    })
}

  ponerFilas = () =>{
    return(
      this.state.usuario.map(user => { 
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
export default App;
