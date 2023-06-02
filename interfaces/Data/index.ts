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
    id: number;
    title: string;
    description: string;
    cover_image: string;
    date_time: Date;
    createdAt: Date;
    privateStatus: boolean;
    publishStatus: boolean;
    hosts: UserI[];
    participants: UserI[];
}