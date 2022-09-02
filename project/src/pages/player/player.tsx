import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-actions';
import useVideoControl from '../../hooks/useVideoControl';
import Spinner from '../../components/spinner/spinner';

function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id: filmId} = useParams();
  const film = useAppSelector((state) => state.film);
  const [isWaiting, setIsWaiting] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    dispatch(fetchFilm(Number(filmId)));
  }, [filmId]);

  const {
    isPlaying,
    played,
    runTime,
    togglePlaying,
    toggleFullScreen,
    changeDuraton,
    handleTimeChange
  } = useVideoControl(videoRef);

  return (
    <div className="player">
      {isWaiting && <Spinner />}
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
        onTimeUpdate={handleTimeChange}
        onLoadedData={() => {
          if (videoRef.current?.duration !== undefined) {
            changeDuraton(videoRef.current.duration);
          }
        }}
        onWaiting={() => setIsWaiting(true)}
        onPlaying={() => setIsWaiting(false)}
      >
      </video>
      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={played} max={100} />
            <div className="player__toggler" style={{left: `${played}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlaying}>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
