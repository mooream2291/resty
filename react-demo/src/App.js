
import React from 'react';
import Header from './header';
import Footer from './footer';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: '',
    }
  }

  handleInput = e => {
    let newInput = e.target.value;
    this.setState({ URL: newInput });
  }

  handleClick = e => {
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
      <Header />
        <form>
          <label for = "URL"> URL: </label>
          <input name = "URL" onChange={this.handleInput} />
        <button onClick={this.handleClick}>Go!</button>
        <p> { this.state.URL }</p>
        <Footer />
        </form>
        </div>
    )
  }
}

export default App;

