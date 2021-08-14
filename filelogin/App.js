import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import { Navbar } from './Navbar';
import { Route, Link, Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;