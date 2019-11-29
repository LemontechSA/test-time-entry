import padStart from "lodash/padStart";

class Duration {
  duration: number;

  constructor(duration: number) {
    this.duration = duration;
  }

  toTime() {
    const value = this.duration * 60;

    return {
      hours: Math.floor(value / 3600),
      minutes: Math.floor((value % 3600) / 60),
      seconds: Math.floor(value % 60)
    };
  }

  toTimeString({ includeSeconds = true } = {}) {
    const { hours, minutes, seconds } = this.toTime();
    const segments = [
      padStart(hours.toString(), 2, "0"),
      padStart(minutes.toString(), 2, "0")
    ];

    if (includeSeconds) {
      segments.push(padStart(seconds.toString(), 2, "0"));
    }

    return segments.join(":");
  }

  toDurationString() {
    const { hours, minutes } = this.toTime();

    return `${hours}h ${minutes}m`;
  }
}

class Time {
  time: string;

  constructor(time: string) {
    this.time = time;
  }

  toDuration() {
    if (this.time == null) {
      return 0;
    }

    const [hoursString, minutesString] = this.time.split(":");
    const hours = parseInt(hoursString, 10);
    const minutes = parseInt(minutesString, 10);

    return hours * 60 + minutes;
  }
}

export default {
  duration: (duration: number) => new Duration(duration),
  time: (time: string) => new Time(time)
};
