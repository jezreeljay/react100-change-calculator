import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      moneyOwed: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      alert: null,
      alertDisplay: false,
      alertType: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = parseFloat(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  calculate(event) {
    const validateDue = this.state.amountDue;
    const validateReceived = this.state.amountReceived;
    
    this.setState({
      value: event.target.value,
      alertDisplay: (validateDue > 0 && validateReceived > 0) ? true : false,
      alert: (validateReceived >= validateDue) ? true : false,
      alertType: (validateReceived > validateDue) ? 'alert-success' : ((validateReceived != validateDue)) ? `alert-danger` : 'alert-info',
      changeDue: validateReceived - validateDue,
      moneyOwed: validateDue - validateReceived,
    }, () => {
      if (validateDue !== 0 && validateReceived !== 0) {
        document.getElementById('alertArea').innerHTML = (validateReceived > validateDue) ? `The total change due is: $${this.state.changeDue}` : ((validateReceived != validateDue)) ? `Additional money owed: $${this.state.moneyOwed}` : 'Change not due.';
      } else {
        alert(`Woops. Looks like I have nothing to calculate! ${String.fromCodePoint(129335)}`);
      }
    });
  }

  alertMessage() {
    return (
      <div className="col">
        <div id="alertArea" className={ `alert + ${this.state.alertType}`}>  
      </div>
    </div>
    );    
  }

  render() {
    return(
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-white border-bottom border-white mt-4">
            <h1>Change Calculator</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 mt-4">
            <div className="card">
              <div className="card-header">
              Enter Information
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label className="font-weight-bold" htmlFor="due"> How much is due?</label>
                  <input className="form-control" type="number" name="amountDue" value={this.state.amountDue} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label className="font-weight-bold" htmlFor="received">How much was received?</label>
                <input className="form-control" type="number" name="amountReceived" value={this.state.amountReceived} onChange={this.handleChange}/> 
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.calculate}>Calculate</button>
                </div>
              </div>
            </div>
        </div>
        <div className="col-xl-8 mt-4">
          <div className="">
            <div className="card">
              <div className="card-header" >Change Due</div>
              <div className="col card-body">
                <div className="row">
                   {(this.state.alertDisplay === true) ? <this.alertMessage/> : ''}
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Twenties</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Tens</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Fives</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Ones</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Quarters</h6>
                      <p id="" className="text-muted"></p>
                  </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Dimes</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Nickels</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Pennies</h6>
                      <p id="" className="text-muted"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;


