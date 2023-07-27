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