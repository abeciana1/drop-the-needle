import { ChildrenI } from '@/interfaces'

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

export interface InputI {
    name: string;
    type?: string;
    labelText: string;
    value: string | number;
    fieldRequired: boolean;
    placeholder: string | number | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void|undefined;
    errorsPresent: number;
    setErrorsPresent: React.Dispatch<React.SetStateAction<number>>;
    min?: number;
    max?: number;
}

export interface LenLimitI extends InputI {
    type: string;
    value: string;
    // placeholder: string;
    min: number;
    max: number;
}

export interface TextFormatI extends InputI {
    formatPattern: string;
    example: string;
}

export interface TimeStampInputI extends InputI {
    timeValue: string;
}