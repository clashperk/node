import { ClanWarClan, ClanWarOpponent } from 'clashofclans.js';
import { ObjectId } from 'mongodb';

export interface ClanMembers {
    _id: ObjectId;
    clanTag: string;
    clanName: string;
    season: string;
    tag: string;
    name: string;

    attackWins: number;
    builderHallLevel: number;
    defenseWins: number;
    townHallLevel: number;

    trophies: {
        value: number;
        gained: number
    };
    versusBattleWins: {
        value: number;
        gained: number
    };
    versusTrophies: {
        value: number;
        gained: number
    };
    warStars: {
        value: number;
        gained: number
    };
    donations: {
        value: number;
        gained: number
    };
    donationsReceived: {
        value: number;
        gained: number
    };
    achievements: {
        name: string;
        value: number;
        gained: number
    }[];

    clanGamesTotal: number;
    clanGamesDisabled: boolean;
    clanGamesEndTime?: Date;

    createdAt: Date;
    updatedAt: Date;
};

export interface ClanWars {
    _id: ObjectId;
    clan: ClanWarClan;
    opponent: ClanWarOpponent;

    warID: number;
    groupWar: boolean;
    isFriendly: boolean;

    preparationStartTime: Date;
    startTime: Date;
    endTime: Date;

    state: 'preparation' | 'inWar' | 'warEnded',
    teamSize: number;
    warTag?: string;
};
