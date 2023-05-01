import React from 'react'
import { NavItemType, imageType } from '@/types';

export interface ChildrenI {
    children: React.ReactElement | React.ReactElement[]
}

export interface NavBarI {
    children: React.ReactElement<NavItemType> | React.ReactElement<NavItemType>[]
}

export interface NavItemI {
    href: string;
    color?: string;
    linkText: string;
}

export interface LinkButtonI {
    href: string;
    linkText: string;
    textColor?: string;
    bgColor?: string;
}

export interface HeroSectionI {
    heading: string;
    bodyTagline: string;
    image: imageType
}

export interface FeatureI {
    title: string;
    body: string;
    icon: React.ElementType;
}