export interface UpdateTrackFormI {
    title: string;
    artist: string;
    startTime: string;
    endTime: string;
    album: string;
    year: string;
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}