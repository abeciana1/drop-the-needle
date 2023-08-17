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
    type: string;
    value: string;
    fieldRequired: boolean;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void|undefined;
    errors: {[key: string]: string};
    // defaultValue: string;
    // inputRule: {
    //     [key: string]: any;
    // };
    [x: string]: any;
}