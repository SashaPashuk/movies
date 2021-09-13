import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner';
import AudditionalInformation from '../components/AudditionaIInformation';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';
import MovieFields from '../components/MovieFilelds';
import { movieDetailsPage } from '../redux/movies/movies-operation';
import fetchConfiguration from '../redux/configuration/configuration-operation';
import {
  getMovieDetailsTitle,
  getLoading,
  getMovieDetailsPoster,
  getMovieDetailsBackdropPath,
} from '../redux/movies/movies-selectors';
import {
  getConfigurationBase_url,
  getMovieDetailsBackdropSizes,
  getMovieDetailsLogoSizes,
} from '../redux/configuration/configuration-selector';
import './stylesViews/MovieDetailsPage.scss';

const defaultSrc = 'https://media.comicbook.com/files/img/default-movie.png';

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const title = useSelector(getMovieDetailsTitle);
  const isLoading = useSelector(getLoading);
  const base_url = useSelector(getConfigurationBase_url);
  const logo_sizes = useSelector(getMovieDetailsLogoSizes);
  const poster_path = useSelector(getMovieDetailsPoster);
  const backdrop_sizes = useSelector(getMovieDetailsBackdropSizes);
  const backdrop_path = useSelector(getMovieDetailsBackdropPath);
  const pathname = useLocation().state?.from.pathname;
  const {
    params: { movieId },
  } = useRouteMatch();
  const history = useHistory();
  const { pathname: locationPathname } = useLocation();

  const from = useRef(pathname);

  useEffect(() => {
    const result =
      locationPathname !== `/movies/${movieId}` &&
      locationPathname !== `/movies/${movieId}/cast` &&
      locationPathname !== `/movies/${movieId}/reviews`;

    if (result) {
      history.push('/');
    }
  }, [history, locationPathname, movieId]);

  useEffect(() => {
    if (base_url) return;

    dispatch(fetchConfiguration());
  }, [dispatch, base_url]);

  useEffect(() => {
    if (!Number(movieId)) {
      history.push('/');
    }

    dispatch(movieDetailsPage(movieId));
  }, [dispatch, history, movieId]);

  const handleGoBackClick = () => {
    history.push({
      pathname: from.current,
    });
  };

  const imageSrc = `${base_url}${logo_sizes}${poster_path}`;
  const bgImageSrc = `${base_url}${backdrop_sizes}${backdrop_path}`;

  return (
    <>
      {/* // ! */}
      {isLoading && <Spinner />}
      {/* {error && <NotFound />} */}
      {title && (
        <>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)), url(${bgImageSrc})`,
            }}
            className="Background"
          >
            <Button
              text={'<'}
              disabled={!from.current && true}
              onClick={handleGoBackClick}
            />
            <Layout>
              <div className="ContainerMovie">
                <div className="WrapMovie">
                  <img
                    src={poster_path ? imageSrc : defaultSrc}
                    alt="title"
                    className="MovieImg"
                  />
                </div>

                <MovieFields />
              </div>
            </Layout>
          </div>
          <AudditionalInformation />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
