import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import 'react-screen-modal/dist/index.css';
import Drawer from './functions';
import { hidescroll, showscroll } from './scroll';
export var DrawerModal = function (props) {
    var _a = useState(props.height), height = _a[0], setheight = _a[1];
    var _b = useState(props.width), width = _b[0], setwidth = _b[1];
    var _c = useState(props.show), show = _c[0], setshow = _c[1];
    useEffect(function () {
        Drawer.Start(props.direction, props.show, props.duration, props.position, props.type);
    });
    return onClick = { props: props, : .onClose };
    style = {};
    {
        visibility: props.backgroundDisable == true ? 'visible' : 'hidden';
    }
};
className = { styles: styles, : .cover }
    >
        { ' ':  }
    < /div>
    < div;
id = 'modal';
style = {};
{
    backgroundColor: typeof props.color !== 'undefined' ? props.color : 'white',
        width;
    typeof width !== 'undefined' ? width : '100%',
        height;
    typeof height !== 'undefined' ? height : '100vh',
        visibility;
    show == true ? 'visible' : 'hidden';
}
className = { styles: styles, : .maincontainer }
    >
        onMouseEnter;
{
    (function () { return showscroll(); });
}
onMouseLeave = {}();
hidescroll();
id = 'container';
style = {};
{
    backgroundColor: props.color;
}
className = { styles: styles, : .container }
    >
        { props: props, : .children }
    < /div>
    < /div>
    < /div>;
export var DrawerItem = function (props) {
    return className;
    {
        styles.draweritem;
    }
     > { props: props, : .children } < /div>;
};
export var Modal = function (props) {
    return show = { props: props, : .show };
    onClose = { props: props, : .onClose };
    closeButton = { props: props, : .closeButton }
        >
            { props: props, : .children }
        < /MainModal>;
};
