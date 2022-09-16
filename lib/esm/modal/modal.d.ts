import React from 'react';
declare type Props = {
    show: boolean;
    closeButton: boolean;
    onClose: () => void;
    children: React.ReactNode;
};
export default function MainModal({ show, onClose, children, closeButton }: Props): JSX.Element;
export {};
