import React from 'react'
import { NavItemType } from '@/types';

export interface NavBarI {
    children: React.ReactElement<NavItemType>[]
}

export interface NavItemI {
    href: string;
    color?: string;
    linkText: string;
}