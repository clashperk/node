export interface TroopsJSON {
    [key: string]: {
        name: string;
        village: string;
        productionBuilding: string;
        type: string;
        upgrade: {
            cost: number[];
            time: number[];
            resource: string;
        };
        levels: number[];
    }[];
};
