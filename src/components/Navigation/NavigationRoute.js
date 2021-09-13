import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../Spinner';

const NavigationRoute = ({ routes, match = '' }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes.map(({ name, exact, path, component }) => {
          if (name === 'Error') {
            return <Route key={name} component={component} />;
          }
          return (
            <Route
              key={path}
              exact={exact}
              path={`${match}${path}`}
              // render={props => <MyComponent {...props} />}
              component={component}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoute;
