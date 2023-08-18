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
    labelText: string;
    value: string;
    fieldRequired: boolean;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void|undefined;
    [x: string]: any;
}

export interface LenLimitI extends InputI {
    min: number;
    max: number;
}