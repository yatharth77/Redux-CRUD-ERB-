import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import {Link} from  'react-router-dom';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import InterviewsPage from './InterviewsPage';
import InterviewsForm from './InterviewsForm';

function App() {
  return (
    <Router>
    <div className="App">
        <Route path="/interviews" exact component={InterviewsPage} />
       	{ /* step -1 called the link interviews which is connected to component InterviewPage */ }
        <Route path="/interviews/new" exact component={InterviewsForm} />

    </div>
    </Router>
  );
}

export default App;
