import { ChildrenI } from '@/interfaces'

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