import React from 'react';
import axios from 'axios';

class SodaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        numberOfSodas: 0,
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSodaChange = this.handleSodaChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        var allSodas = this.props.soda;
        let x = 0 
        for (var i in allSodas) {
            if (allSodas[i].product_name === this.state.value){
                x = 1
                break;
            }
        }
        if (x === 0){
            alert("Invalid Input")
            event.preventDefault()
        } else if ((this.state.numberOfSodas <=0) || (this.state.numberOfSodas > allSodas[i].quantity)){
            alert("Invalid Input")
            event.preventDefault()
        }  else {
            event.preventDefault()
            let newQuantity = allSodas[i].quantity - this.state.numberOfSodas;
            let url = 'http://localhost:9001/sodas/' + allSodas[i]._id;

            try{
              await axios.put(url, {quantity: newQuantity})
                .then((response) => response.data)
              alert("Enjoy your soda")
              window.location.reload()
            } catch (err) {
              console.log(err);
              alert("Sorry, something went wrong")
            }

        }
    }
  
    handleSodaChange(event) {
        this.setState({value: event.target.value});
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value    });
    }
  
    render() {
      return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'40px'}}>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            Which Soda do you want?
                
            <select style={{marginLeft:'15px'}} value={this.state.value} onChange={this.handleSodaChange}>
            <option value="None">None</option>
            {this.props.soda.map((soda) => (
                        soda.quantity > 0 ?
                        (
                            <option key={soda.product_name} value={soda.product_name}>{soda.product_name}</option>
                        ) : null
                    ))} 
          </select>
          </label>
          </div>
          <br />
          <div>
          <label>
            Number of Sodas:
            <input
              name="numberOfSodas" type="number"
              value={this.state.numberOfSodas}
              onChange={this.handleInputChange} />
          </label>
          </div>
          <br />
          <input type="submit" value="Insert Card/Cash and Make Purchase" />
        </form>
        </div>
      );
    }
  }

export default SodaForm;