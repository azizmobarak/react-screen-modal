import React, { useEffect } from 'react'
import styles from './styles.module.css';
import 'react-screen-modal/dist/index.css';
import show from './functions';

export const CoverModal = (props) => {

useEffect(()=>{
  show.Direction(props.direction,props.show,props.duration);
});



  return (
    <div
    id="modal"
  style={{
     backgroundColor:typeof props.color!=="undefined" ? props.color : "white",
    // visibility:props.show==true ? "visible" : "hidden"
    width:typeof props.width!="undefined" ? props.width : "100%"
    }}
  className={styles.maincontainer}>
  {
    typeof props.closeButtonRight!="undefined" ?
    props.closeButtonRight==true?
    <p id="close"
    onClick={()=>props.onClose()}
    style={{
     color:typeof props.closeButtonColor!=="undefined" ? props.closeButtonColor : "black" ,
     marginLeft:"87%"
    }}
    className={styles.close}>
    X
    </p>
    :
    <p id="close"
    onClick={()=>props.onClose()}
    style={{
      color:typeof props.closeButtonColor!=="undefined" ? props.closeButtonColor : "black",
      marginLeft:"1%"
     }}
    className={styles.close}>
    X
    </p>
    :
    <div></div>
  }
   <div
   style={{ backgroundColor:props.color }}
   className={styles.container}>
  {props.children}
  </div>
  </div>)
}
