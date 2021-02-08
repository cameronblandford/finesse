import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Drops from "./pages/Drops";
import DropDetail from "./pages/DropDetail";
import Index from "./pages/Index";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App subpixel-antialiased">
          <Nav />
          <Switch>
            <Route exact path="/drops">
              <Drops />
            </Route>
            <Route exact path="/drops-:id" component={DropDetail} />
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
