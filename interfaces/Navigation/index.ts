export interface NavItemI {
    href: string;
    color?: string;
    linkText: string;
}

export interface NavItemIconI extends NavItemI {
    icon: React.ElementType;
}