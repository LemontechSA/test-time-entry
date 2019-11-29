import React, { useState } from "react";
import classnames from "classnames";
import { uncontrollable } from "uncontrollable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import css from "./styles.css";
import convert from "./convert";
import TimerIcon from "./TimerIcon";
import getEntryHeight from "./getEntryHeight";

export type Props = {
  active?: boolean;
  color?: string;
  className?: string;
  description?: string;
  duration: number;
  onActiveChange?: (active: boolean) => void;
  project: string;
  style?: React.CSSProperties;
};

type ControlledProps = {
  active: boolean;
  onActiveChange: (active: boolean) => void;
};

const TimeEntry: React.FC<Props> = props => {
  const {
    color,
    description,
    duration,
    project,
    active,
    onActiveChange,
    style,
    className,
    ...otherProps
  } = props as Props & ControlledProps;
  const [hover, setHover] = useState(false);

  return (
    <div
      {...otherProps}
      className={classnames(css.container, className, {
        [css.active]: active
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        height: getEntryHeight(duration),
        backgroundColor: active ? undefined : color
      }}
    >
      <div className={css.project}>{project}</div>
      <div className={css.description}>{description}</div>
      <div className={css.footer}>
        <div className={css.duration}>
          {active && <TimerIcon animate size={14} />}
          {active
            ? convert.duration(duration).toTimeString()
            : convert.duration(duration).toDurationString()}
        </div>

        {hover && !active && (
          <FontAwesomeIcon icon={faPlay} onClick={() => onActiveChange(true)} />
        )}

        {active && (
          <FontAwesomeIcon
            icon={faPause}
            onClick={() => onActiveChange(false)}
          />
        )}
      </div>
    </div>
  );
};

TimeEntry.defaultProps = {
  active: false
} as Partial<Props>;

export default uncontrollable(TimeEntry, {
  active: "onActiveChange"
});
