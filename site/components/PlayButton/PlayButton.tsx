import { FiPlay } from "react-icons/fi";

interface PlayButtonProps {
  width?: number;
  height?: number;
}

const PlayButton = ({ width, height }: PlayButtonProps) => {
  return (
    <button
      className="audio-button"
      style={width && height ? { width, height } : {}}
    >
      {width && height ? (
        <FiPlay color="#fff" fill="#fff" width={width} height={height} />
      ) : (
        <FiPlay color="#fff" fill="#fff" width={25} height={25} />
      )}
    </button>
  );
};

export default PlayButton;
