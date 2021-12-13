import { Route, Switch } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import DetailsGroup from "../../pages/DetailsGroup";
import Groups from "../../pages/Groups";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/detailsgroup">
          <DetailsGroup />
        </Route>
        <Route path="/dashboard/:token">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
