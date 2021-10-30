import logo from './logo.svg';
import './App.css';
import Packages from './component/Packages/Packages';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './component/Home/Header/Header';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Booking from './component/BooKing/Booking';
import Login from './component/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import AddTourPackage from './component/AddTourPackage/AddTourPackage';
import Management from './component/ManageMent/Management';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
        <Packages></Packages>
        </Route>

        <Route path="/home">
        <Packages></Packages>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>

        <Route path="/about">
        <About></About>
        </Route>

        <PrivateRoute path="/Booking/:serviceId">
        <Booking></Booking>
        </PrivateRoute>

        <Route path="/addtour">
          <AddTourPackage></AddTourPackage>
        </Route>
        
        <PrivateRoute path="/management">
          <Management></Management>
        </PrivateRoute>

        <Route path="*">
        <NotFound></NotFound>
        </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
