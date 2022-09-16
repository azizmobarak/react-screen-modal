import React, { useEffect } from 'react';
import styles from './styles.module.css';
import {showmodal,closemodal} from './singlemodal';

export default function MainModal(props) {

useEffect(()=>{
  if(props.show==true)
  {
    showmodal();
  }else{
    closemodal();
  }
})

  return (
   <div id="container" className={styles.container}>
   <div
   onClick={()=>props.onClose()}
   id="disable" className={styles.disable}>
   </div>
   <div
   className={styles.modal}
   id="single-modal">
   {props.children}
   {
     props.closeButton ?
     <div className={styles.footer}>
   <button className={styles.close} onClick={()=>props.onClose()} >close</button>
   </div>
   :
   <div></div>
   }
   </div>
   </div>
  );
}
