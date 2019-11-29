import { MAX_ENTRY_HEIGHT, MIN_ENTRY_HEIGHT } from "./constants";

export default (duration: number) => {
  const height =
    duration / ((14 * 60) / (MAX_ENTRY_HEIGHT - MIN_ENTRY_HEIGHT)) +
    MIN_ENTRY_HEIGHT;

  return Math.max(height, MIN_ENTRY_HEIGHT);
};
