interface DefaultButtonI {
    text: string;
    bgColor?: string;
    ctaArrow?: boolean;
}

export interface OnClickButtonI extends DefaultButtonI {
    onClick: () => void;
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
}