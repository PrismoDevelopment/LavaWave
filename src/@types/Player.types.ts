import type{ Queue } from "../lib/queue/Queue";
import type{ VoiceServerUpdateData } from "./LavaWave.types";


// Main constructor options
export type PlayerOptions = {
    guildId: string;
    voiceChannelId: string;
    textChannelId?: string;
    selfDeaf?: boolean;
    selfMute?: boolean;
    queue?: Queue;
};

export type VoiceState = {
    sessionId?: string;
    event?: VoiceServerUpdateData;
};

export type PlayOptions = {
    startTime?: number;
    endTime?: number;
    pause?: boolean;
    noReplace?: boolean;
};