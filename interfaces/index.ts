import React from 'react'
import {
    ImageType,
    DashPowerHourType
} from '@/types';

export interface ChildrenI {
    children: React.ReactElement | React.ReactElement[];
}

export interface NavItemI {
    href: string;
    color?: string;
    linkText: string;
}

export interface NavItemIconI extends NavItemI {
    icon: React.ElementType;
}

export interface LinkButtonI extends DefaultButtonI {
    href: string;
}

export interface HeroSectionI {
    heading: string;
    bodyTagline: string;
    image: ImageType;
    ctaButton: boolean;
    ctaText?: string;
    ctaLink?: string;
    ctaColor?: string;
}

export interface FeatureI {
    title: string;
    body: string;
    icon: React.ElementType;
    color?: string;
}

export interface WavySectionI {
    color: string;
    bgColor?: string;
    type: 1 | 2 | 3 | 4;
}

export interface ComponentMarginI {
    children: React.ReactElement | React.ReactElement[];
    bgColor?: string;
}

export interface SeoI {
    title?: string;
    description?: string;
    noIndex?: boolean;
    noFollow?: boolean;
}

interface DefaultButtonI {
    text: string;
    ctaArrow?: boolean;
    bgColor?: string;
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

export interface LinkOnClickEvent extends LinkButtonI, EventOnClickBtnI {}

export interface NavBarI {
    status: boolean;
}

export interface AccountI {
    name: string;
    email: string;
    image: string;
}

export interface NavLogoLinkI {
    size: number;
}

export interface PlaylistCardI {
    powerHour: DashPowerHourType;
}

export interface StyledHeadingI {
    text: string;
    color?: number;
}

export interface ToggleButtonI {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}