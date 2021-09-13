import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Navigation from '../Navigation';
import AudditionalRoutes from '../../routes/AudditionalRoutes';
import NavigationRoute from '../Navigation/NavigationRoute';
import './AudditionalInformation.scss';

const AudditionalInformation = () => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <div className="AudditionalWrap">
        <h3 className="AudditionaTitle">Audditional information:</h3>
        <div className="AudditionalWrapLink">
          <Navigation routes={AudditionalRoutes} match={url} />
        </div>
      </div>

      <NavigationRoute routes={AudditionalRoutes} match={path} />
    </>
  );
};

export default AudditionalInformation;
