import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Signin,Signup,Browse,Watch } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';



export function App() {
    const { user } = useAuthListener();

  return (
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
             <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.WATCH}>
                <Watch />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home />
            </IsUserRedirect> 
        </Switch>
    </Router>
  );
}

/*// export function App() //{ *if using this remove the Routes import and the ./constants/routes file *
//   return (
//     <Router>
//         <Switch>
//             <Route path="/browse">
//                 <p>I will be the sign in page</p>
//             </Route>
//             <Route path="/signin">
//                 <p>I will be the sign up page</p>
//             </Route>
//             <Route path="/browse">
//                 <p>I will be the browse page</p>
//             </Route>
//             <Route path="/">
//                 <Home/>
//             </Route>
//         </Switch>
//     </Router>
//   );
// }*/