import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./view/Search/Search";
import Map from './view/Map/Map';
import Profile from './view/Profile/Profile';
import Header from '../src/layout/Header';
import ChatFeed from '../src/view/Chat/components/ChatFeed';
import LoginForm from '../src/view/Chat/components/LoginForm';
import {ChatEngine} from "react-chat-engine";
import "./AppChat.css"


const projectID = 'fec93f9a-927f-46c9-9481-0921295966b2';

  
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <Router>
      <Header />
      <div>
        <Switch>
        <Route path="/" exact render={() => <Search />} />
        <Route path="/map" exact render={() => <Map />} />
        <Route path="/profile" exact render={() => <Profile />} />
        <Route path="/chat" exact render={() => 
        <ChatEngine  
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}/>} 
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
