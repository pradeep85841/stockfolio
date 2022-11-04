import React, { Component } from 'react';


class UpdateBlock extends Component {
  state = {
    response: '',
    action: '',
    blockName:'',
    stock:'',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/blockUpdate');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/blockUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: this.state.action,
                             blockName: this.state.blockName,
                             stock: this.state.stock}),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="UpdateBlock">

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Rebalancing Results</strong>
          </p>
          <input
            type="text"
            value={this.state.action}
            onChange={e => this.setState({ action: e.target.value })}
          />
          <input
            type="text"
            value={this.state.blockName}
            onChange={e => this.setState({ blockName: e.target.value })}
          />
          <input
            type="text"
            value={this.state.stock}
            onChange={e => this.setState({ stock: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default UpdateBlock;