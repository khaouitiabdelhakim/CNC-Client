export interface SystemManagerNavItem {
    displayName?: string;
    disabled?: boolean;
    external?: boolean;
    twoLines?: boolean;
    chip?: boolean;
    iconName?: string;
    navCap?: string;
    chipContent?: string;
    chipClass?: string;
    subtext?: string;
    route?: string;
    children?: SystemManagerNavItem[];
    ddType?: string;
}