import React, { useEffect, useState } from 'react'
import styles from './styles.module.css';
import 'react-screen-modal/dist/index.css';
import Drawer from './functions';

export const CoverModal = (props) => {

  const [height,setheight]=useState(props.height);
  const [width,setwidth]=useState(props.width);
  const [show,setshow]=useState(props.show)

useEffect(()=>{
  Drawer.Start(props.direction,props.show,props.duration,props.position,props.type);
});

const onClose=()=>{
  props.onClose();
}

return (
  <div>
  <div
   onClick={()=>onClose()}
   style={{
    visibility:props.backgroundDisable==true ? 'visible' : "hidden"
    }}
   className={styles.cover}
   > </div>

   <div
    id="modal"
  style={{
    backgroundColor:typeof props.color!=="undefined" ? props.color : "white",
    width:typeof width!="undefined" ? width : "100%",
    height:typeof height!="undefined" ? height : "100vh",
    visibility:show==true ? 'visible' : "hidden"
    }}
  className={styles.maincontainer}>
   <div
   id="react-screen-modal"
   style={{ backgroundColor:props.color }}
   className={styles.container}>
   {props.children}
  </div>
   </div>
   </div>
  )
}
