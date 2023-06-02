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

