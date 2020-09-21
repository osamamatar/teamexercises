import React from 'react'
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from "./components/navbar"
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


  function App() {
    return (
      <React.Fragment>
        <Router>
            <div className='container'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={ExercisesList}/>
                    <Route path='/edit/:id'  component={EditExercise}/>
                    <Route path='/create'  component={CreateExercise}/>
                    <Route path='/user'  component={CreateUser}/>
                </Switch>
            </div>
        </Router>
      </React.Fragment>
    
    );
  }

export default App;
