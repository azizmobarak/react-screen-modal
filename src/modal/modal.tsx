import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { showModal, closeModal } from './singlemodal'

type Props = {
  show: boolean;
  closeButton: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MainModal({
  show,
  onClose,
  children,
  closeButton
}: Props) {
  useEffect(() => {
    if (show === true) {
      showModal()
    } else {
      closeModal()
    }
  }, [])

  return (
    <div id='container' className={styles.container}>
      <div onClick={() => onClose()} id='disable' className={styles.disable} />
      <div className={styles.modal} id='single-modal'>
        {children}
        {showHideButton(closeButton)}
      </div>
    </div>
  )
}

const showHideButton = (closeButton) => {
  if (closeButton) {
    return (
      <div className={styles.footer}>
        <button className={styles.close} onClick={() => props.onClose()}>
          close
        </button>
      </div>
    )
  }
  return <div />
}
