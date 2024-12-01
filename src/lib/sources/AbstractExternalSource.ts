import { SearchResult } from '../../@types';
import LavaWave from '../LavaWave';


export abstract class AbstractExternalSource {
    protected readonly lavawave: LavaWave;

    constructor(lavawave: LavaWave) {
        this.lavawave = lavawave;
    }

    abstract loadItem(query: string): Promise<SearchResult | null>;
}