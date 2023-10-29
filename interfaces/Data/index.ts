export interface UserI {
    user: {
        id: number;
        name: string;
        email: string;
        hosted: DashPowerHourI[];
        participants: DashPowerHourI[];
        invites: UserInvitesI[]
    }
}

interface PowerHourInviteI extends PowerHourMetaI {
    description: string;
}

interface PowerHourMetaI {
    id: number;
    title: string;
    cover_image: string;
    publicLink?: boolean;
    songLimit: number;
    date_time: Date;
}

export interface DashPowerHourI {
    powerHour: PowerHourMetaI
}

export interface UserInvitesI {
    rsvpYes: boolean;
    rsvpNo: boolean;
    rsvpMaybe: boolean;
    powerHour: PowerHourInviteI
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
    album: string;
    year: string;
    participant: {
        user: {
            name: string;
        }
    };
}

export interface TrackDataI {
    title: string;
    artist: string;
    youtubeLink: string;
    album: string;
    year: string;
    startTime: string;
    endTime: string;
    orderNumber: number;
}