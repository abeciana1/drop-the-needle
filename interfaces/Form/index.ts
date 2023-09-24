import { ChildrenI } from '@/interfaces'
import {
    InputType,
    OptionType
} from '@/types'

export interface FormValuesI {
    [key: string]: string | number | boolean;
}

export interface SingleSelectFieldI {
    icon?: React.ElementType;
    labelText: string;
    dataSource: any;
    property: string;
    selectedValue: any;
    setSelectedValue: (value: any) => void;
    updateFunc?: (value: any) => void;
}

export interface FormI extends ChildrenI {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface NumberValidation {
    value: number;
    message: string;
}

export interface FileUploadI extends InputType {
    acceptedFileTypes: string;
}

export interface SelectI extends InputType {
    currentSelection: string;
    options: OptionType[];
}