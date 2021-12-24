import React, { Component } from 'react';

class Header extends Component {

  //state初期化
  state = {keyword: ''}

  //value取得 event handler
  onInputChangeHandler = (event) => {
    // this.setState({keyword: event.target.value})
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <div>
          <h2>FootballTube</h2>
        </div>
        <div>
          <input onChange={this.onInputChangeHandler} value={this.state.keyword} />
        </div>
      </div>
    );
  }
}

export default Header;