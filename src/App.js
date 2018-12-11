import React, { Component } from 'react';



class App extends Component {
  state = { forminput: "", 
            cetak: "" 
          }

    gambar = () => {
        this.setState({
            cetak: this.state.forminput
        })
    }

    display() {
        return (
            <p><img style={{borderRadius: "50%", backgroundColor: 'white', width: '200px', marginTop: '30px'}} src={`https://robohash.org/${this.state.cetak}.png`} alt="404" /></p> 
        )
    }
  render() {
    return (
      <div className="container text-center p-5">
          <input type="text" className="form-control w-25 mx-auto my-3" placeholder="User Name" onChange={(x) => { this.setState({ forminput: x.target.value }) }}></input>
          <button type="button" className="btn btn-success" onClick={this.gambar}>Buat Profile Picture!</button>
          <div className="row">
              <div className="col-lg-12 text-center">
                  {this.state.cetak && this.display()}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
