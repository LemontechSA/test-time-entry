declare class Duration {
    duration: number;
    constructor(duration: number);
    toTime(): {
        hours: number;
        minutes: number;
        seconds: number;
    };
    toTimeString({ includeSeconds }?: {
        includeSeconds?: boolean;
    }): string;
    toDurationString(): string;
}
declare class Time {
    time: string;
    constructor(time: string);
    toDuration(): number;
}
declare const _default: {
    duration: (duration: number) => Duration;
    time: (time: string) => Time;
};
export default _default;
