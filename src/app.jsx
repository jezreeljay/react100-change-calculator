import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
                  <input className="form-control" type="number" name="due"/>
                </div>
                <div className="form-group">
                <label className="font-weight-bold" htmlFor="received">How much was received?</label>
                <input className="form-control" type="number" name="received"/> 
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Calculate</button>
                </div>
              </div>
            </div>
        </div>
        <div className="col-xl-8 mt-4">
          <div className="">
            <div className="card">
              <div className="card-header">Change Due</div>
              <div className="col card-body">
                <div className="row">
                  <div className="col">
                    <div className="alert alert-success">
                    Total Change Due.
                    </div>
                    <div className="alert alert-warning">
                    Additional Money owed.
                  </div>
                </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Twenties</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Tens</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Fives</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Ones</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Quarters</h6>
                      <p id="" className="text-muted">0</p>
                  </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Dimes</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Nickels</h6>
                      <p id="" className="text-muted">0</p>
                    </div>
                  </div>
                    <div className="col-lg-3 mb-3">
                    <div className="card card-body text-center bg-light">
                      <h6 className="font-weight-bold">Pennies</h6>
                      <p id="" className="text-muted">0</p>
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


