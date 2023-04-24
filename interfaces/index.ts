import { NavItemType } from '@/types';

export interface NavBar {
    children: NavItemType[]
}

export interface NavItemI {
    href: string;
    color: string;
    linkText: string;
}