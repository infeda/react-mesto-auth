import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...props}) => {
  console.log('proptected route');
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-up" />
      }
    </Route>
  )
}

export default ProtectedRoute;