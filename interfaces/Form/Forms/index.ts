export interface UpdateTrackFormI {
    title: string;
    artist: string;
    startTime: string;
    endTime: string;
    album: string;
    year: string;
    youtubeLink: string;
    submitHandler: (data: any) => void;
}

export interface UpdatePowerHourFormI {
    title: string;
    description: string;
    dateTime: Date | string;
    privateStatus: boolean;
    publishStatus: boolean;
    songLimit: number;
    submitHandler: (data: any) => void;
}