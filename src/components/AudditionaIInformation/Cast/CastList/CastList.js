import React from 'react';
import { useSelector } from 'react-redux';
import { getCast } from '../../../../redux/audInformation/audInf-selectors';
import {
  getCastLogoSizes,
  getConfigurationBase_url,
} from '../../../../redux/configuration/configuration-selector';
import './CastList.scss';

const CastList = () => {
  const cast = useSelector(getCast);
  const base_url = useSelector(getConfigurationBase_url);
  const logo_sizes = useSelector(getCastLogoSizes);

  return (
    <ul className="CastActorsList">
      {cast.map(({ id, profile_path, name, character }) => {
        const src = `${base_url}${logo_sizes}${profile_path}`;

        const defaultSrc =
          'https://stavik.ru/sites/default/files/styles/personal/public/personal_photo/default_man_photo.jpg';

        return (
          <li className="CastActorsItem" key={id}>
            <div className="CastActorWrapImg">
              <img
                src={profile_path ? src : defaultSrc}
                alt={name}
                className="CastActorsImg"
              />
            </div>

            <div className="ActorNameWrap">
              <p className="ActorName">{name}</p>
              <div>
                <div className="ActorCharacterTitle">Character:</div>
                <p className="ActorCharacter">{character}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
