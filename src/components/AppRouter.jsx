import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Redirect, useLocation } from 'react-router';
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
// import ProtectedPage from '../pages/ProtectedPage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import MainContest from './MainContest'
import ExpenseTracker from '../ExpenseTracker';
import MainTodo from './MainTodo';
// import Todo from './Todo/Todo.js'


export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/todo' component={MainTodo} />
          <ProtectedRoute exact path='/contests' component={MainContest} />
          <ProtectedRoute exact path='/expense' component={ExpenseTracker} />
          <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}

function ProtectedRoute(props){

  const {currentUser}=useAuth()
  const location=useLocation()
  const {path}=props
  if(path==='/login' || path==='/register' || path==='/forgot-password' || path==='/reset-password'){
    return currentUser? (<Redirect to={location.state?.from ?? '/profile'}/>)
    :(<Route{...props}/>)
  }
  return currentUser?<Route{...props} />:<Redirect to={{pathname:'/login',
  state:{from:path},

}}/>

}
