import React, {Component} from 'react'
class Calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      if(this.state.count>=0){
        return (
          <div className='position-Center top-20 start-20 col-sm-20'>
            <h1 class='text-info'>Calculadora</h1>
            <p class='fs-2 text-primary'>{this.state.count}</p>
            <button className="btn btn-info" onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
            <button className="btn btn-warning" onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
            <button className="btn btn-info" onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
          </div>
        );    
      }else if (this.state.count===-1){
        this.setState({ count: this.state.count +1 })
        return (
          <div className='position-sticky col-sm-4'>
            
            <button  onClick={() => this.setState({ count: this.state.count - 1 })}>
              -
            </button>
            <button onClick={() => this.setState({ count: this.state.count + 2 })}>
              2
            </button>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              +
            </button>
          </div>
        );
      }
      
    }
  }

  export default Calculadora;