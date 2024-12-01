import Track from './Track';
import LavaWave from '../LavaWave';
import { formatTime } from "../utils/formatTime";

import type { User } from 'discord.js';
import type { Timestamp } from '../../@types';


export default class UnresolvedTrack {
    public readonly title: string;
    public readonly author: string;
    public readonly duration: Timestamp;
    public readonly uri: string;
    public readonly source: string;

    public requester: User | null;

    readonly #isrc: string;
    readonly #lavawave: LavaWave;

    constructor(lavawave: LavaWave, title: string, author: string, duration?: number, uri?: string, source?: string, isrc?: string) {
        this.#lavawave = lavawave;

        this.title = title;
        this.author = author;
        this.duration = {
            label: formatTime(duration ?? 0),
            value: duration ?? 0
        };
        this.uri = uri ?? '';
        this.source = source ?? 'Unknown';

        if (isrc && lavawave.useISRC) this.#isrc = isrc;

        this.requester = null;
    }

    get query() {
        return this.#isrc ? `"${this.#isrc}"` : `${this.author} - ${this.title}`;
    }

    public async build(): Promise<Track> {
        let res = await this.#lavawave.search(this.query, this.#lavawave.unresolvedSearchSource);

        if (res.loadType !== 'search' || !res.tracks.length) {
            if (!this.#isrc) throw new Error(`Failed to resolve track ${this.uri}`);

            res = await this.#lavawave.search(`${this.author} - ${this.title}`, this.#lavawave.unresolvedSearchSource);

            if (res.loadType !== 'search' || !res.tracks.length) throw new Error(`Failed to resolve track ${this.uri}`);
        }

        const track = res.tracks[0] as Track;
        track.setRequester(this.requester);

        track.metadata = {
            title: this.title,
            author: this.author,
            duration: this.duration,
            uri: this.uri,
            source: this.source,
            isrc: this.#isrc,
        };

        return track;
    }

    public setRequester(requester: User | null) {
        this.requester = requester;
    }
}
