import React, { useState, useEffect } from "react";

export type Props = {
  animate?: boolean;
  defaultPosition?: number;
  size?: number;
};

export type PropsWithDefaults = {
  animate: boolean;
  defaultPosition: number;
  size: number;
};

const TimerIcon: React.FC<Props> = ({
  animate,
  defaultPosition,
  size,
  ...props
}: PropsWithDefaults) => {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    if (!animate) {
      return;
    }

    const interval = setInterval(() => {
      setPosition(position === 315 ? 0 : position + 45);
    }, 1000);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <svg {...props} height={size} viewBox="0 0 64 64" width={size}>
      <path
        d="M28.621783,35.051136 C28.6550184,36.9342983 30.1854376,38.4548728 32.0723825,38.4534909 C33.9692165,38.4521018 35.5080304,36.9132879 35.5094195,35.0164539 C35.5096683,34.6767836 35.4605998,34.3486661 35.3689766,34.0388639 L33.5558491,20.9094768 C33.5570103,20.0947656 32.8979476,19.4357029 32.0844823,19.4381099 C31.2710161,19.4417637 30.6142015,20.0985783 30.6136665,20.9089257 L28.7440615,34.1829687 C28.6856684,34.4150894 28.6508831,34.6565631 28.6424102,34.9046851 L28.621783,35.051136 Z"
        transform={`rotate(${position} 32 35)`}
        fill="currentColor"
      />
      <path
        d="M32,64 C15.9837423,64 3,51.0162577 3,35 C3,18.9837423 15.9837423,6 32,6 C48.0162577,6 61,18.9837423 61,35 C61,51.0162577 48.0162577,64 32,64 Z M32,58 C44.7025492,58 55,47.7025492 55,35 C55,22.2974508 44.7025492,12 32,12 C19.2974508,12 9,22.2974508 9,35 C9,47.7025492 19.2974508,58 32,58 Z"
        fill="currentColor"
      />
      <rect
        x="26"
        y="3.55271368e-15"
        width="12"
        height="4"
        rx="2"
        fill="currentColor"
      />
    </svg>
  );
};

TimerIcon.defaultProps = {
  animate: true,
  defaultPosition: 0,
  size: 16
};

export default TimerIcon;
