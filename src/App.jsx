import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Message.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Messages />
        <ChatBar />
      </div>

    );
  }
}
export default App;