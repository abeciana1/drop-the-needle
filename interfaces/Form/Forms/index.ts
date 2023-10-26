import { TrackDataI } from "@/interfaces"

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
    id: number;
    title: string;
    description: string;
    dateTime: Date | string;
    privateStatus: boolean;
    publishStatus: boolean;
    songLimit: number;
}

export interface AddTrackFormI {
    submitHandler: (trackData: TrackDataI) => void;
}

export interface UpdateCoverImageFormI {
    coverImage: string;
}