import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route path="/products/add">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/products/update/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
