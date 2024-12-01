import { SearchResult } from '../../@types';
import LavaWave from '../LavaWave';
export declare abstract class AbstractExternalSource {
    protected readonly lavawave: LavaWave;
    constructor(lavawave: LavaWave);
    abstract loadItem(query: string): Promise<SearchResult | null>;
}
