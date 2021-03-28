import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import AppBar from '../AppBar';
import Container from '../container';
import { authOperations } from '../../redux/auth';
import PrivateRoute from '../../components/PrivateRoute';
import PublicRoute from '../../components/PublicRoute';
import { useDispatch } from 'react-redux';
const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="ThreeDots" color="green" height={80} width={80} />
        }
      >
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }

//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense
//           fallback={
//             <Loader type="ThreeDots" color="green" height={80} width={80} />
//           }
//         >
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/contacts"
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/contacts"
//               component={LoginView}
//             />
//             <PrivateRoute
//               path="/contacts"
//               redirectTo="/login"
//               component={ContactsView}
//             />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
