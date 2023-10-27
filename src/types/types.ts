export type ProjectsArrayType = {
    id: number;
    title: string;
    descriptions: string;
    image: string;
    url?: string;
};
export type WrapperType = {
    direction?: string,
    justifyContent?: string,
    align?: string,
    wrap?: string,
};
export type HeaderMenuType = {
    id: number;
    title: string;
};
export type SocialMenuType = {
    id: number;
    image: string;
    href?: string;
};