import './App.css';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './components/Product';
import Category from './components/category/Category';
import Order from './components/order/Order';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/categories">Category</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/categories">
          <Category />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
