export interface UpdateTrackFormI {
    title: string;
    artist: string;
    startTime: string;
    endTime: string;
    album: string;
    year: string;
    youtubeLink: string;
    submitHandler: (e: React.FormEvent<HTMLFormElement>, data: any) => void;
}

export interface UpdatePowerHourFormI {
    title: string;
    description: string;
    coverImage: string;
    dateTime: Date;
    privateStatus: boolean;
    publishStatus: boolean;
    songLimit: number;
    submitHandler: (e: React.FormEvent<HTMLFormElement>, data: any) => void;
}