import logo from './logo.svg';
import './App.css';

function App() {
  function formatuser(user)
  {
    return user.firstname + " " + user.lastname;
  }
  const name=<h1>Hello world from app js file</h1>;
  const user = {
    firstname : "Vinay",
    lastname : "Kumar",
  }
  return (<div>
    <div>{name}</div>
  <div>{formatuser(user)}</div></div>)

}

export default App;
