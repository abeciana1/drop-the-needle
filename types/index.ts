import { Path, UseFormRegister } from "react-hook-form";
import {
    FormValuesI,
    NumberValidation,
    YouTubeVideoI
} from '@/interfaces'

export type ImageType = {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export type DashPowerHourType = {
    id: number;
    title: string;
    cover_image: string;
    publicLink: boolean;
    date: string;
    time: string;
    hostedLink: boolean;
}

export type InputType = {
    hideLabel?: boolean;
    name: string;
    type?: string;
    value?: string;
    label: Path<FormValuesI>;
    placeholder?: string;
    fieldRequired: boolean | string;
    register: UseFormRegister<FormValuesI>;
    registerOptions?: {
        maxLength?: NumberValidation;
        minLength?: NumberValidation;
        max?: number;
        min?: number;
        pattern?: {
            value: RegExp,
            message: string;
        };
        validate?: Function | Object | any;
        valueAsNumber?: any;
        valueAsString?: any;
        valueAsDate?: any;
        setValueAs?: (value: any) => void;
        disabled?: boolean;
        onChange?: (e: React.SyntheticEvent) => void;
        onBlur?: (e: React.SyntheticEvent) => void;
        value?: string | number | boolean;
        shouldUnregister?: boolean;
        deps?: string | string[];
    }
}

export type OptionType = {
    value: string;
    text: string
}

export type YouTubeVideoType = Pick<YouTubeVideoI, "id" | "title" | "link" | "thumbnail" | "description" | "durationString">