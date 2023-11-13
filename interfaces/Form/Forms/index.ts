import { TrackDataI, UserPowerHourI } from "@/interfaces"
import { OptionType } from '@/types'

export interface UpdateTrackFormI {
    id: number;
    index: number;
    title: string;
    artist: string;
    startTime: string;
    endTime: string;
    album: string;
    year: string;
    youtubeLink: string;
}

export interface UpdatePowerHourFormI {
    id: number;
    title: string;
    description: string;
    dateTime: Date | string;
    submissionDeadline: Date | string;
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

export interface InviteFormI {
    id: number,
    inviteId: number;
    userId: number;
    index: number;
    title: string;
    description: string;
    songLimit: number;
    date: string;
    time: string;
    rsvpYes: boolean;
    rsvpNo: boolean;
    rsvpMaybe: boolean;
    submissionDeadline: string;
}

export interface AddVideoPHFormI {
    link: string;
    mappedPowerHours: OptionType[]
    userPowerHours: UserPowerHourI[];
}