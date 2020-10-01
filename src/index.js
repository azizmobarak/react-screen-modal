import React, { useEffect } from 'react'
import styles from './styles.module.css';
import 'react-screen-modal/dist/index.css';
import show from './functions';

export const CoverModal = (props) => {

useEffect(()=>{
  show.Direction(props.direction,props.show,props.duration,props.position);
});



  return (
    <div
    id="modal"
  style={{
     backgroundColor:typeof props.color!=="undefined" ? props.color : "white",
    width:typeof props.width!="undefined" ? props.width : "100%",
    height:typeof props.height!="undefined" ? props.height : "100vh",
    }}
  className={styles.maincontainer}>

   <div
   style={{ backgroundColor:props.color }}
   className={styles.container}>
   {props.children}
  </div>
  </div>)
}
