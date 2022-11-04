import React, { Component, Fragment } from 'react';


class Rebalancing extends Component {
  state = {
    response: '',
    sector: '',
    suggested:'',
    performers:'',
    lowPerformers:'',
    isLoading: false,
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/rebalanceResults');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const response = await fetch('/rebalanceResults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sector: this.state.sector}),
    });
    const body = await response.json();
    
    this.setState({ suggested: body.suggested });
    this.setState({ performers: body.performers });
    this.setState({ lowPerformers: body.lowPerformers });

    this.setState({ isLoading: false });

  };
  
render() {
    return (
      <Fragment>
      <div className="rebalancingResult">

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Rebalancing Results</strong>
          </p>
          <input
            type="text"
            value={this.state.sector}
            required
            onChange={e => this.setState({ sector: e.target.value.toUpperCase() })}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
        <li>{this.state.suggested}</li>
        <li>{this.state.performers}</li>
        <li>{this.state.lowPerformers}</li>
    
        </ul>        
        )}
      </div>
      </Fragment>
    );
  }
}

export default Rebalancing;