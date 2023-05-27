import NavItem from '@/components/common/Navigation/NavItem';

export type NavItemType = typeof NavItem;

export type ImageType = {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export type DashPowerHourType = {
    id: number;
    title: string;
    cover_image: string;
}