import React from 'react'
import {
    ImageType,
    OptionType
} from '@/types';
import {
    SongI,
    OnClickButtonI,
    UserPowerHourI
} from '@/interfaces'

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

export interface AccordionDataI {
    icon: React.ElementType;
    heading: string;
    dataSource: any;
    size: string;
    property: string;
}

export interface TrackListI {
    songs: SongI[];
    removeHandler: (index: number, id: number) => void;
    participantList?: boolean;
}

export interface TrackI {
    song: SongI;
    user: string;
    index: number;
    removeHandler: (index: number, id: number) => void;
}

export interface TrackPresentI {
    link: string;
    startTime: string;
    endTime: string;
}

export interface ModalI extends OnClickButtonI, ChildrenI {
    ctaArrow?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    render: boolean;
    setRender: (arg: boolean) => void;
    icon?: React.ElementType;
}

export interface LoadingInstanceI {
    isLoading: boolean;
}

export interface DisclaimerI {
    message: string;
}

export interface InviteCardI {
    id: number;
    inviteId: number;
    userId: number;
    index: number;
    title: string;
    description: string;
    cover_image: string;
    date: string;
    time: string;
    rsvpYes: boolean;
    rsvpNo: boolean;
    rsvpMaybe: boolean;
    songLimit: number;
}

export interface PillTagI {
    text: string;
    color: string;
}

export interface YouTubeCardI {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    description: string;
    durationString: string;
    mappedPowerHours: OptionType[];
    userPowerHours: UserPowerHourI[];
}

export interface PowerHourPromoI {
    inviteToken: string;
}