import React from "react";
import routes from "./routes";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalLayout from "./layouts/global";
import AuthLayout from "./layouts/auth";
const App = () => {
  const layoutManager = (item, key) => {
    switch (item.layout) {
      case "global":
        return (
          <Route
            key={key}
            exact
            path={item.path}
            render={(route) => (
              <GlobalLayout route={route} Component={item.component} />
            )}
          />
        );
        case "auth":
          return (
            <Route
              key={key}
              exact
              path={item.path}
              render={(route) => (
                <AuthLayout route={route} Component={item.component} />
              )}
            />
          );
      default:
        return (
          <Route
            key={key}
            exact
            path={item.path}
            render={(route) => (
              <GlobalLayout route={route} Component={item.component} />
            )}
          />
        );
    }
  };

  const switchRoutes = () => {
    return routes.map((item, index) => {
      if (item.permission === "all") {
        return layoutManager(item, index);
      } else if (item.permission === "guest") {
        return layoutManager(item, index);
      }
    });
  };

  return (
    <BrowserRouter>
      <Switch>{switchRoutes()}</Switch>
    </BrowserRouter>
  );
};

export default App;

// class App extends React.Component {
//   render() {
//     return <>hi</>;
//   }
// }
// export default App;
