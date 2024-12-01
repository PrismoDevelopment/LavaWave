import type { LoadException } from "./REST.types";


/** Lavalink node options */
export type NodeOptions = {
    id?: string;
    hostname: string;
    port: number;
    secure?: boolean;
    followRedirects?: boolean;
    password?: string;
    resuming?: boolean;
    resumeTimeout?: number;
    maxRetryAttempts?: number;
    retryAttemptsInterval?: number;
};

/** Lavalink node stats */
export type NodeStats = {
    playingPlayers: number;
    players: number;
    uptime: number;
    memory: {
        reservable: number;
        used: number;
        free: number;
        allocated: number;
    };
    cpu: {
        cores: number;
        systemLoad: number;
        lavalinkLoad: number;
    };
    frameStats?: {
        sent: number;
        nulled: number;
        deficit: number;
    };
};

/** Route planner API */
export type RoutePlannerStatus = {
    class: string | null;
    details: RoutePlannerDetails | null;
};

export type RoutePlannerDetails = {
    ipBlock: {
        type: string;
        size: string;
    };
    failingAddresses: Array<{
        address: string;
        failingTimestamp: number;
        failingTime: string;
    }>;
    blockIndex?: string;
    currentAddressIndex?: string;
};

/** Lavalink version */
export type version = string;

/** Lavalink Info */
export type Info = {
    version: {
        semver: string;
        major: number;
        minor: number;
        patch: number;
        preRelease: string | null;
    };
    buildTime: number;
    git: {
        branch: string;
        commit: string;
        commitTime: number;
    };
    jvm: string;
    lavaplayer: string;
    sourceManagers: string[];
    filters: string[];
    plugins: Array<{
        name: string;
        version: string;
    }>;
}

/** Lavalink node incoming payloads */
export interface PlayerEventPayload {
    op: 'event';
    type: 'TrackStartEvent' | 'TrackEndEvent' | 'TrackExceptionEvent' | 'TrackStuckEvent' | 'WebSocketClosedEvent';
    guildId: string;
}

export interface TrackStartEvent extends PlayerEventPayload {
    type: 'TrackStartEvent';
    track: string;
}

export type TrackEndReason = 'FINISHED' | 'LOAD_FAILED' | 'STOPPED' | 'REPLACED' | 'CLEANUP';

export interface TrackEndEvent extends PlayerEventPayload {
    type: 'TrackEndEvent';
    track: string;
    reason: TrackEndReason;
}

export interface TrackExceptionEvent extends PlayerEventPayload {
    type: 'TrackExceptionEvent';
    track: string;
    exception: LoadException & {
        cause: string;
    };
}

export interface TrackStuckEvent extends PlayerEventPayload {
    type: 'TrackStuckEvent';
    track: string;
    thresholdMs: number;
}

export interface WebSocketClosedEvent extends PlayerEventPayload {
    code: number;
    reason: string;
    byRemote: boolean;
}

export type PlayerState = {
    time: number;
    position?: number;
    connected: boolean;
};