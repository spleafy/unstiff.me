import { FiPlay, FiPause } from "react-icons/fi";

interface PlayButtonProps {
  width?: number;
  height?: number;
  playing: boolean;
}

const PlayButton = ({ width, height, playing }: PlayButtonProps) => {
  console.log(playing);

  return (
    <button
      className="audio-button"
      style={width && height ? { width, height } : {}}
    >
      {width && height ? (
        <>
          {!playing ? (
            <FiPlay color="#fff" fill="#fff" width={width} height={height} />
          ) : (
            <FiPause color="#fff" fill="#fff" width={width} height={height} />
          )}
        </>
      ) : (
        <>
          {!playing ? (
            <FiPlay color="#fff" fill="#fff" width={"25px"} height={"25px"} />
          ) : (
            <FiPause color="#fff" fill="#fff" width={25} height={25} />
          )}
        </>
      )}
    </button>
  );
};

export default PlayButton;
