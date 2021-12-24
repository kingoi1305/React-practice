import React, { Component } from 'react';
class Header extends Component {

  //state初期化
  state = {keyword: ''}

  //value取得 event handler
  onInputChangeHandler = (event) => {
    this.setState({keyword: event.target.value});
  }

  render(){
    return(
      <nav className='navbar navbar-expand navbar-light bg-light mb-3 p-3'>
          <h2 className='mb-0 me-2'>footballtube</h2>
        <form className='form-group my-2 my-log-0 ml-sm-2'>
          <input onChange={this.onInputChangeHandler} value={this.state.keyword} className='form-control form-control-lg mr-sm-2' type='text' placeholder='Search...' aria-label='Search...' />
        </form>
      </nav>
    );
  }
}

export default Header;