import { Path, UseFormRegister } from "react-hook-form";
import {
    FormValuesI,
    NumberValidation
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
}

export type InputType = {
    name: string;
    type?: string;
    value?: string;
    label: Path<FormValuesI>;
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