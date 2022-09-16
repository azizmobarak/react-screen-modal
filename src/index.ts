import React, { useEffect, useState, FC } from 'react'
import styles from './styles.module.css'
import 'react-screen-modal/dist/index.css'
import Drawer from './functions'
import { hidescroll, showscroll } from './scroll'
import MainModal from './modal/modal'

type Props = {
  direction: string,
  show: boolean,
  duration: number,
  position: number | string,
  type: string,
};

export const DrawerModal: FC<Props> = (props) => {
  const [height, setheight] = useState(props.height)
  const [width, setwidth] = useState(props.width)
  const [show, setshow] = useState(props.show)

  useEffect(() => {
    Drawer.Start(
      props.direction,
      props.show,
      props.duration,
      props.position,
      props.type
    )
  })

  return (
    <div>
      <div
        onClick={props.onClose}
        style={{
          visibility: props.backgroundDisable == true ? 'visible' : 'hidden'
        }}
        className={styles.cover}
      >
        {' '}
      </div>

      <div
        id='modal'
        style={{
          backgroundColor:
            typeof props.color !== 'undefined' ? props.color : 'white',
          width: typeof width !== 'undefined' ? width : '100%',
          height: typeof height !== 'undefined' ? height : '100vh',
          visibility: show == true ? 'visible' : 'hidden'
        }}
        className={styles.maincontainer}
      >
        <div
          onMouseEnter={() => showscroll()}
          onMouseLeave={() => hidescroll()}
          id='container'
          style={{ backgroundColor: props.color }}
          className={styles.container}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

export const DrawerItem = (props) => {
  return <div className={styles.draweritem}>{props.children}</div>
}

export const Modal = (props) => {
  return (
    <MainModal
      show={props.show}
      onClose={props.onClose}
      closeButton={props.closeButton}
    >
      {props.children}
    </MainModal>
  )
}
