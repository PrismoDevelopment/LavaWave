import Player from './Player';

import type {
    ChannelMixOptions,
    DistortionOptions,
    FilterOptions,
    KaraokeOptions,
    LowPassOptions,
    RotationOptions,
    TimescaleOptions,
    TremoloOptions,
    VibratoOptions
} from '../@types';


export default class Filters {
    private readonly player: Player;

    private options: FilterOptions;

    /**
     * Creates an instance of filters
     * @param player
     */
    constructor(player: Player) {
        this.player = player;
        this.options = {};
    }

    /** Checks if some filter is enabled */
    get enabled(): boolean {
        return !!Object.keys(this.options).length;
    }

    /** Gets a copy of active filters object */
    get active(): FilterOptions {
        return Object.assign({}, this.options);
    }

    /**
     * Sets ChannelMix filter
     * @param options - The channel mix options
     * @param options.leftToLeft - The left to left mix
     * @param options.leftToRight - The left to right mix
     * @param options.rightToLeft - The right to left mix
     * @param options.rightToRight - The right to right mix
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setChannelMix(options: ChannelMixOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('ChannelMixOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('ChannelMixOptions must be an object.');

        if (options === null) {
            delete this.options.channelMix;
        }
        else {
            this.options.channelMix = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets Distortion filter
     * @param options - The distortion options
     * @param options.sinOffset - The sin offset
     * @param options.sinScale - The sin scale
     * @param options.cosOffset - The cos offset
     * @param options.cosScale - The cos scale
     * @param options.tanOffset - The tan offset
     * @param options.tanScale - The tan scale
     * @param options.offset - The offset
     * @param options.scale - The scale
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setDistortion(options: DistortionOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('DistortionOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('DistortionOptions must be an object.');

        if (options === null) {
            delete this.options.distortion;
        }
        else {
            this.options.distortion = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets Equalizer filter
     * @param options - The equalizer band array
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setEqualizer(options: number[] | null, apply = true): this {
        if (options === undefined) throw new TypeError('Equalizer must not be empty!');
        if (options === null) {
            delete this.options.equalizer;
            if (apply) this.apply();
            return this;
        }

        if (typeof options !== 'object' || !Array.isArray(options)) throw new TypeError('Equalizer must be an Array.');
        if (options.length > 15) throw new RangeError('Equalizer Array size must be less or equal than 15');

        this.options.equalizer = options;
        if (apply) this.apply();
        return this;
    }

    /**
     * Sets Karaoke filter
     * @param options - The karaoke options
     * @param options.level - The level
     * @param options.monoLevel - The mono level
     * @param options.filterBand - The band to filter
     * @param options.filterWidth - The filter width
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setKaraoke(options: KaraokeOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('KaraokeOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('KaraokeOptions must be an object.');

        if (options === null) {
            delete this.options.karaoke;
        }
        else {
            this.options.karaoke = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets LowPass filter
     * @param options - The lowpass options
     * @param options.smoothing - The lowpass smoothing
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setLowPass(options: LowPassOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('LowPassOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('LowPassOptions must be an object.');

        if (options === null) {
            delete this.options.lowPass;
        }
        else {
            this.options.lowPass = options;
        }

        if (apply) this.apply();
        return this;
    }

    /**
     * Sets Rotation filter
     * @param options - The rotation options
     * @param options.rotationHz - The rotation speed, in Hertz
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setRotation(options: RotationOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('RotationOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('RotationOptions must be an object.');

        if (options === null) {
            delete this.options.rotation;
        }
        else {
            this.options.rotation = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets Timescale filter
     * @param options - The timescale options
     * @param options.speed - The speed
     * @param options.rate - The rate
     * @param options.pitch - The pitch
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setTimescale(options: TimescaleOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('TimescaleOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('TimescaleOptions must be an object.');

        if (options === null) {
            delete this.options.timescale;
        }
        else {
            this.options.timescale = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets Tremolo filter
     * @param options - The tremolo options
     * @param options.frequency - The frequency 0 < f ≤ 14
     * @param options.depth - The depth 0 < d ≤ 1
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setTremolo(options: TremoloOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('TremoloOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('TremoloOptions must be an object.');

        if (options === null) {
            delete this.options.tremolo;
        }
        else {
            this.options.tremolo = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets Vibrato filter
     * @param options - The vibrato options
     * @param options.frequency - The frequency 0 < f ≤ 14
     * @param options.depth - The depth 0 < d ≤ 1
     * @param apply - Whether to send filter payload to Lavalink or not
     * @returns The filters instance, for chaining calls
     */
    public setVibrato(options: VibratoOptions | null, apply = true): this {
        if (options === undefined) throw new TypeError('VibratoOptions must not be empty!');
        if (typeof options !== 'object' || Array.isArray(options)) throw new TypeError('VibratoOptions must be an object.');

        if (options === null) {
            delete this.options.vibrato;
        }
        else {
            this.options.vibrato = options;
        }

        if (apply) this.apply();

        return this;
    }

    /**
     * Sets the volume
     * @param vol - The volume to set [0,500]
     * @returns The filters instance, for chaining calls
     */
    public setVolume(vol: number): this {
        if (typeof vol !== 'number') throw new TypeError('Volume must be an number.');
        if (vol < 0 || vol > 500) throw new TypeError('Volume must be an number between 0 and 500.');

        this.options.volume = vol;

        this.player.node?.rest.updatePlayer(this.player.guildId, { volume: vol });

        return this;
    }

    /** Sets all filters */
    public set(filters: FilterOptions): void {
        this.options = this.options.volume ? { volume: this.options.volume } : {};

        for (const [filter, config] of Object.entries(filters)) {
            if (!['channelMix', 'distortion', 'equalizer', 'karaoke', 'lowPass', 'rotation', 'timescale', 'tremolo', 'vibrato'].includes(filter)) {
                continue;
            }
            else {
                this.options[filter] = config;
            }
        }

        this.apply();
    }

    /** Clears all active filters */
    public clear(): void {
        this.options = {};

        this.player.node?.rest.updatePlayer(this.player.guildId, { filters: {} });
    }

    /** Sends filters payload to Lavalink Node */
    public apply(): void {
        const payload = this.options;
        if ('volume' in payload) {
            delete payload.volume;
        }
        if (this.options.equalizer) { Object.assign(payload, { equalizer: this.options.equalizer.map((gain, band) => ({ band, gain })) }); }

        this.player.node?.rest.updatePlayer(this.player.guildId, { filters: payload });
    }
}
