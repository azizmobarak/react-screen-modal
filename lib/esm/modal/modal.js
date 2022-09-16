var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import styles from './styles.module.css';
import { showModal, closeModal } from './singlemodal';
export default function MainModal(_a) {
    var show = _a.show, onClose = _a.onClose, children = _a.children, closeButton = _a.closeButton;
    useEffect(function () {
        if (show === true) {
            showModal();
        }
        else {
            closeModal();
        }
    }, []);
    return (_jsxs("div", __assign({ id: 'container', className: styles.container }, { children: [_jsx("div", { onClick: function () { return onClose(); }, id: 'disable', className: styles.disable }), _jsxs("div", __assign({ className: styles.modal, id: 'single-modal' }, { children: [children, showHideButton(closeButton)] }))] })));
}
var showHideButton = function (closeButton) {
    if (closeButton) {
        return (_jsx("div", __assign({ className: styles.footer }, { children: _jsx("button", __assign({ className: styles.close, onClick: function () { return props.onClose(); } }, { children: "close" })) })));
    }
    return _jsx("div", {});
};
