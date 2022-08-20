import { useEffect, useRef, useState } from 'react';

type PreviewProps = {
  src: string;
  previewImage: string;
  isHovered: boolean;
}

function Preview({src, previewImage, isHovered}: PreviewProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (!isLoading && isHovered) {
      timer = setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current?.pause();
    videoRef.current.currentTime = 0;

    return () => {
      clearTimeout(timer);
    };
  }, [isHovered, isLoading]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      poster={previewImage}
      width={280}
      height={175}
    />
  );
}

export default Preview;
