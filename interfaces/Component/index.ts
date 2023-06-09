import React from 'react'
import {
    ImageType,
    DashPowerHourType
} from '@/types';

export interface ChildrenI {
    children: React.ReactElement | React.ReactElement[];
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

export interface AccountI {
    name: string;
    email: string;
    image: string;
}

export interface StyledHeadingI {
    text: string;
    color?: number;
}

export interface FooterI {
    bgColor: string;
}

export interface CommonPageLayoutI extends ChildrenI {
    footerColor?: string
}