export interface UserI {
    user: {
        id: number;
        name: string;
        email: string;
        hosted: DashPowerHour[];
        participants: DashPowerHour[];
    }
}

export interface DashPowerHour {
    powerHour: {
        id: number;
        title: string;
        cover_image: string;
    }
}

