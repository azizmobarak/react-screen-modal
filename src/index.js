import React from 'react'
import styles from './styles.module.css';
import 'react-screen-modal/dist/index.css';

export const CoverModal = (props) => {

  return (
    <div
    id="modal"
  style={{ backgroundColor:props.color,visibility:props.show==true ? "visible" : "hidden"}}
  className={styles.maincontainer}>
  {props.closeButtonRight==true?
    <p id="close"
    onClick={()=>props.onClose()}
    style={{ color:props.closeButtonColor,marginLeft:"95%" }}
    className={styles.close}>
    X
    </p>
    :
    <p id="close"
    onClick={()=>props.onClose()}
    style={{ color:props.closeButtonColor,marginLeft:"5%" }}
    className={styles.close}>
    X
    </p>
  }
   <div
   style={{ backgroundColor:props.color }}
   className={styles.container}>
  {props.children}
  </div>
  </div>)
}
