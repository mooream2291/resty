
import React from 'react';
import Header from './header';
import Form from './form';
import Footer from './footer';
import './app.scss';
import './header.scss';
import History from './history'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    }
  }

  updateHistory = newObj => {
    //setting the state overwrites anything previous (it does not edit, it complete gets rid of it)
    this.setState({ history: [...this.state.history, newObj] })

  }
const App = props => {
  render() {
    return (
      <>
      <BrowserRouter>
      <Header />
      <Form updateHistory= {this.updateHistory}/>
      <History history= {this.state.history}/>
      <Footer />
      </BrowserRouter>
      </>
    )
  };
}
};

export default App;



