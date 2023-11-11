interface DefaultButtonI {
    text: string;
    bgColor?: string;
    ctaArrow?: boolean;
}

export interface OnClickButtonI extends DefaultButtonI {
    onClick: () => void;
    icon?: React.ElementType;
}

export interface OnClickIconButtonI extends OnClickButtonI {
    icon: React.ElementType;
}

export interface EventOnClickBtnI extends DefaultButtonI {
    onClick: (e: Event) => void;
}

export interface LinkButtonI extends DefaultButtonI {
    href: string;
}

export interface ToggleButtonI {
    isOpen: boolean;
    setOpen: (value: any) => void;
}

export interface LinkOnClickEvent extends LinkButtonI, EventOnClickBtnI {}

export interface SubmitButtonI {
    text?: string;
    bgColor?: string;
    disabled?: boolean;
}

export interface ExpandButtonPropsI {
    text: string;
    disabled?: boolean;
    backgroundColor?: string;
    icon: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    size: number;
}

export interface ShareButtonPropsI extends ExpandButtonPropsI {
    subject?: any;
    body?: any;
    sms?: boolean;
}

export interface CopyButtonI {
    text: string;
}