export type ChannelMixOptions = {
    leftToLeft?: number;
    leftToRight?: number;
    rightToLeft?: number;
    rightToRight?: number;
};
export type DistortionOptions = {
    sinOffset?: number;
    sinScale?: number;
    tanOffset?: number;
    tanScale?: number;
    cosOffset?: number;
    cosScale?: number;
    offset?: number;
    scale?: number;
};
export type KaraokeOptions = {
    level?: number;
    monoLevel?: number;
    filterBand?: number;
    filterWidth?: number;
};
export type LowPassOptions = {
    smoothing?: number;
};
export type RotationOptions = {
    rotationHz?: number;
};
export type TimescaleOptions = {
    speed?: number;
    pitch?: number;
    rate?: number;
};
export type TremoloOptions = {
    frequency?: number;
    depth?: number;
};
export type VibratoOptions = {
    frequency?: number;
    depth?: number;
};
export type FilterOptions = {
    channelMix?: ChannelMixOptions;
    distortion?: DistortionOptions;
    equalizer?: number[];
    karaoke?: KaraokeOptions;
    lowPass?: LowPassOptions;
    rotation?: RotationOptions;
    timescale?: TimescaleOptions;
    tremolo?: TremoloOptions;
    vibrato?: VibratoOptions;
    volume?: number;
    [key: string]: unknown;
};
