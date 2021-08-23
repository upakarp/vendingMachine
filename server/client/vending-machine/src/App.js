import React, { Component } from 'react';
import Sodas from './components/sodas'
import SodaForm from './components/sodaForm'

class App extends Component {

  state = {
    sodas: []
  }

  componentDidMount() {
    fetch('http://localhost:9001/sodas')
    .then(res => res.json())
    .then((data) => {
      this.setState({ sodas: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
      <Sodas sodas = {this.state.sodas} />
      <SodaForm soda = {this.state.sodas} />
      </div>
    );
  }
}

export default App;
