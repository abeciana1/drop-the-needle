export interface UserI {
    user: {
        id: number;
        name: string;
        email: string;
        hosted: DashPowerHourI[];
        participants: DashPowerHourI[];
    }
}

interface PowerHourMetaI {
    id: number;
    title: string;
    cover_image: string;
    publicLink?: boolean;
}

export interface DashPowerHourI {
    powerHour: PowerHourMetaI
}

export interface PowerHourGroupI { // for cards
    powerHours: DashPowerHourI[]
}

export interface PowerHourI {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    date_time: Date;
    createdAt: Date;
    privateStatus: boolean;
    publishStatus: boolean;
    participants: [{
        user: {
            name: string;
        }
    }];
    songLimit: number;
    PowerHourSongs: SongI[]
}

export interface PowerHourDynamicPageI {
    powerHour: PowerHourI
}

export interface SongI {
    id: number;
    title: string;
    artist: string;
    youtubeLink: string;
    startTime: string;
    endTime: string;
    orderNumber: number;
    createdAt: Date | string;
    participant: {
        user: {
            name: string;
        }
    };
}