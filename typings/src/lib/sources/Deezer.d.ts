import { AbstractExternalSource } from './AbstractExternalSource';
import LavaWave from '../LavaWave';
import type { SearchResult } from '../../@types';
export default class Deezer extends AbstractExternalSource {
    static readonly DEEZER_REGEX: RegExp;
    private static readonly USER_AGENT;
    constructor(lavawave: LavaWave);
    loadItem(query: string): Promise<SearchResult | null>;
    getTrack(id: string): Promise<SearchResult>;
    getList(type: 'ALBUM' | 'PLAYLIST', id: string): Promise<SearchResult>;
    private handleErrorResult;
    private buildTrack;
    private makeRequest;
}
