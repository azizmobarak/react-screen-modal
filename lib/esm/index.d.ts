import { FC } from 'react';
import 'react-screen-modal/dist/index.css';
declare type Props = {
    direction: string;
    show: boolean;
    duration: number;
    position: number | string;
    type: string;
};
export declare const DrawerModal: FC<Props>;
export declare const DrawerItem: (props: any) => div;
export declare const Modal: (props: any) => {
    props: any;
    "": any;
};
export {};
