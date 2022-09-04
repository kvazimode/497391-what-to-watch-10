import React, { useEffect, useState } from 'react';
import { parsePlayerRunTime } from '../tools';

const useVideoControl = (videoRef: React.MutableRefObject<HTMLVideoElement | null>) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const [runTime, setRuntime] = useState('');

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const changeDuraton = (duration: number) => {
    setRuntime(parsePlayerRunTime(duration));
  };

  const handleTimeChange = () => {
    if (videoRef.current === null) {
      return;
    }
    const playedVal = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    const runTimeVal = Math.floor(Number(videoRef.current.duration - videoRef.current.currentTime));
    if (playedVal !== 100) {
      setPlayed(playedVal);
      setRuntime(parsePlayerRunTime(runTimeVal));
      return;
    }
    setPlayed(100);
    setIsPlaying(false);
  };

  useEffect(() => {
    isPlaying
      ? videoRef.current?.play()
      : videoRef.current?.pause();
  }, [isPlaying, videoRef]);

  return {
    isPlaying,
    played,
    runTime,
    togglePlaying,
    toggleFullScreen,
    changeDuraton,
    handleTimeChange
  };
};

export default useVideoControl;
