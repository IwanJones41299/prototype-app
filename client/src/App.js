import React,{useContext} from 'react';
import { AuthContext } from './Content/AuthContext';

function App() {
  const { user,setUser,isAuthenticated,setIsAuthenticated } = useContext(AuthContext)
  console.log(user);
  console.log(isAuthenticated);
  return (
    <p>Placeholder</p>
  );
}

export default App;