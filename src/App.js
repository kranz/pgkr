import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            Friends
          </Header.Content>
        </Header>
        <Image centered size='large' src='./centered-paragraph.png' />
      </div>
    );
  }
}

export default App;
