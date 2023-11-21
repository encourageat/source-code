import logo from './logo.svg';
import './App.css';
import React from 'react';


const App = (props) => {
  return (
    <div> 
        <h1>Welcome {props.username}</h1>   
    </div>
  );
};
/*
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: 'login-required',})
      .then((authenticated) => {
        if(authenticated)
        {
          setAuthenticated(true);
          console.log("authenticated");
        }
      })
      .catch((error) => {
        console.log('Keycloak initialization error:', error);
      });
  }, [authenticated]);

  return (
    <div>
      {authenticated ? (
        <h1>User is authenticated</h1>
      ) : (
        <h1>Not authenticated!</h1>
      )}
    </div>
  );
};

*/
export default App;
