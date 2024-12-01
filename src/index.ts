import LavaWave from "./lib/LavaWave";
import Node, { NodeState } from "./lib/Node";
import Player, { ConnectionState, RepeatMode } from "./lib/Player";
import Track from "./lib/queue/Track";
import Filters from "./lib/Filters";

import { version } from "../package.json";

const VERSION = version;


export {
    ConnectionState,
    Filters,
    LavaWave,
    Node,
    NodeState,
    Player,
    RepeatMode,
    Track,
    VERSION
};