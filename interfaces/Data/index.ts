export interface UserI {
    user: {
        id: number;
        name: string;
        email: string;
        hosted: DashPowerHourI[];
        participants: DashPowerHourI[];
    }
}

export interface DashPowerHourI {
    powerHour: {
        id: number;
        title: string;
        cover_image: string;
    }
}

export interface PowerHourI {
    powerHour: {
        id: number;
        title: string;
        description: string;
        cover_image: string;
        date_time: Date;
        createdAt: Date;
        privateStatus: boolean;
        publishStatus: boolean;
        participants: UserI[];
        PowerHourSongs: SongI[]
    }
}

export interface SongI {
    id: number;
    title: string;
    artist: string;
    youtubeLink: string;
    startTime: string;
    endTime: string;
    orderNumber: number;
    createdAt: Date;
    participant: UserI;
}