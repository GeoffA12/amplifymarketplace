import React from "react";
import "./App.css";
// The Hub module will allow us to dispatch and listen for events in our app. We can also utilize it to listen for auth state changes 
import { Auth, Hub } from 'aws-amplify';
import { Authenticator, AmplifyTheme } from 'aws-amplify-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import MarketPage from './pages/MarketPage';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.getUserData();
    // The three arguments for the hub listener are as follows:
    /* 
    1. The channel we want to listen to events on
    2. Where do we want to listen for event changes? By passing 'this' we're specifying we want to listen for event changes
    within the App component
    3. The function we want to use to handle the event data*/
    Hub.listen('auth', this, 'onHubCapsule')
  }

  // here we can check for which event has taken place. There are a number of auth related events we can use here 
  // to check for sign in sign out, and other auth events given the capsule argument. 
  onHubCapsule = capsule => {
    switch(capsule.payload.event) {
      case "signIn":
        console.log("signed in")
        this.getUserData()
        break;
      case "signUp":
        console.log("signed up")
        this.getUserData()
        break;
      case "signOut":
        console.log("signed out")
        this.setState({ user: null})
        break;
      default:
        return;
    }
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user ? this.setState({
      user
    })
    :
    this.setState({
      user: null
    });
  }

  handleSignOut = async () => {
    try {
      await Auth.signOut()
    }catch(error) {
      console.log(error);
    }
    
  }

  render() {
    const { user } = this.state;
    return !user ? (
      <Authenticator theme={theme} />
    )
    : (
      <Router>
        <React.Fragment>
        {/* Navigation */}
        <Navbar user={user} handleSignOut={this.handleSignOut}/>
        { /* Routes */ }
          <div className="app-container">
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/markets/:marketId" component={({
               match }) => <MarketPage marketId={match.params.marketId} />} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

/* Here we are customizing the amplify css rules on the withAuthenticator css provided 
to us by amplify. You can see the Amplify css themes by looking at the inspect elements on the browser */
const theme = {
  ...AmplifyTheme,
  navBar: {
    // Make sure to spread in the rest of the themes when modifying a CSS rule on an element rendered by amplify and react
    ...AmplifyTheme,
    backgroundColor: "#ffc0cb"
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor : '#f90' 
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "var(--squidInk)"
  }

};

/* We can customize the withAuthenticator package from amplify using additional arguments in this higher-order function.    
The second argument will be a boiolean value set to true denoting that we want to include greetings in the function.   
The third argument is an array where we would pass in any custom arguments. The fourth argument will be null and the fifth is the one 
we care about, which is the custom theme. */
//export default withAuthenticator(App, true, [], null, theme);

/* Authenticator is a noram lreact component unlike withAuthenticator. One limitation of withAuthenticator is that we're very limited on the 
style customization of the package. One limitation of Authenticator is that by default Authenticator won't be able to detect the auth state
of our user pool. We'll need to do more work to set this up. */
export default App;
