import React from 'react'
import {
    NavItemType,
    ImageType
} from '@/types';

export interface ChildrenI {
    children: React.ReactElement | React.ReactElement[];
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