// it will show the content from right and will close it to the right too

import { DirectionType, ModalType, Position } from './type'

var modal: HTMLElement | null = document.getElementById('modal');


// when it's 100% it igniore the default the margins
const fromright = (show: boolean, duration: number, position: DirectionType, type: ModalType) => {
  if (modal)
  {
    if (show === true) {
      const modalwidth = modal.clientWidth
      modal.style.marginTop = changeDefaultPositiontoBottom(position)
      if (modalwidth !== 100) {
        modal.style.transition = duration + 's'
        modal.style.marginLeft = window.innerWidth - modalwidth + 'px'
        modal.style.visibility = 'visible'
      } else {
        modal.style.transition = duration + 's'
        modal.style.marginLeft = '0'
        modal.style.visibility = 'visible'
      }
      if (type === ModalType.Modal) {
        if (position === DirectionType.Top) {
          modalstyle(Position.RightTop)
        } else {
          modalstyle(Position.RightBottom)
        }
      }
    } else {
      modal.style.transition = duration + 's'
      modal.style.visibility = 'hidden'
      modal.style.marginLeft = '5000px'
    }
  }
}

// it will keep the default margins to 0 0 and also will keep the default direction
// from the right of the window
const fromLeft = (show: boolean, duration: number, position: DirectionType, type: ModalType) => {
  if(modal) {
    if (show == true) {
      modal.style.marginTop = changeDefaultPositiontoBottom(position)
      modal.style.transition = duration + 's'
      modal.style.visibility = 'visible'
      modal.style.marginLeft = '0'
      if (type === ModalType.Modal) {
        if (position === DirectionType.Top) {
          modalstyle(Position.LeftTop)
        } else {
          modalstyle(Position.LeftBottom)
        }
      }
    } else {
      modal.style.transition = duration + 's'
      modal.style.visibility = 'hidden'
      modal.style.marginLeft = '-5000px'
    }
  }
}

// by default it's on the left of the top
// the postion will change automatically by the changedefaultpositiontoright method
// when the user want it to display from the right of the screen
const fromTop = (show: boolean, duration: number, position: DirectionType, type: ModalType) => {
  if(modal) {
    if (show == true) {
      modal.style.marginLeft = changeDefaultPositiontoRight(position)
      modal.style.transition = duration + 's'
      modal.style.visibility = 'visible'
      modal.style.marginTop = '0'
      if (type === 'modal') {
        if (position === 'right') {
          modalstyle('right-top')
        } else {
          modalstyle('left-top')
        }
      }
    } else {
      modal.style.transition = duration + 's'
      modal.style.visibility = 'hidden'
      modal.style.marginTop = '-5000px'
    }
  }
}

// by default it's on the top , so to let it be in the bottom and display from the botom
// we have to do some job and let user don't feel it was on the top of the screen
// here we change the position before starting and the changedefaultpositiontoright will
// change the default position from left to right when the user want it to come from the right
const fromBottom = (show, duration, position, type) => {
  const modal: HTMLElement = document.getElementById('modal')
  if (show == true) {
    var modalheight = modal.clientHeight
    modal.style.marginLeft = changeDefaultPositiontoRight(position)
    if (modalheight !== '100vh') {
      modal.style.transition = duration + 's'
      modal.style.visibility = 'visible'
      modal.style.marginTop = window.innerHeight - modalheight + 'px'
    } else {
      modal.style.transition = duration + 's'
      modal.style.visibility = 'visible'
      modal.style.marginTop = '0'
    }
    if (type === 'modal') {
      if (position === 'right') {
        modalstyle('right-bottom')
      } else {
        modalstyle('left-bottom')
      }
    }
  } else {
    modal.style.transition = duration + 's'
    modal.style.visibility = 'hidden'
    modal.style.marginTop = '5000px'
  }
}

// this funtion check if the user ask for centrlized the modal /div
// so it helps to make it at the middle of the page just by calculing
// the window size and the modal size and put it on the right position
const toCenter = (duration, show) => {
  var modal = document.getElementById('modal')
  var w = modal.clientWidth
  var h = modal.clientHeight

  if (show == true) {
    if (modal.clientWidth === window.innerWidth) {
      modal.style.marginLeft = '0px'
    } else {
      modal.style.marginLeft =
        (parseInt(window.innerWidth) - parseInt(w)) / 2 + 'px'
    }
    if (modal.clientWidth === window.innerHeight) {
      modal.style.marginTop = '0px'
    } else {
      modal.style.marginTop =
        (parseInt(window.innerHeight) - parseInt(h)) / 2 + 'px'
    }
    modal.style.transition = duration + 's'
    modal.style.visibility = 'visible'
  } else {
    modal.style.transition = duration + 's'
    modal.style.visibility = 'hidden'
    modal.style.marginTop = '-5000px'
  }
}

// this function have an important role when the page is refreched
// it will hide the modal , because by default it's on the page
// it uses a counter and lanch the modal into the right place before starting
// bu using the direction that mentioned in the first refrech
const makeDrawerhidden = (direction) => {
  var modal = document.getElementById('modal')
  if (direction == 'top') {
    modal.style.transition = '0'
    modal.style.marginTop = '-5000px'
  } else {
    if (direction == 'bottom') {
      modal.style.transition = '0'
      modal.style.marginTop = '5000px'
    } else {
      if (direction == 'left') {
        modal.style.transition = '0'
        modal.style.marginLeft = '-5000px'
      } else {
        if (direction == 'right') {
          modal.style.transition = '0'
          modal.style.marginLeft = '5000px'
        } else {
          modal.style.transition = '0'
          modal.style.marginTop = '-3000px'
        }
      }
    }
  }
}

// it will change the default position to the right corner and it will display the modal from the bottom
// with keeping it's size.
const changeDefaultPositiontoRight = (position: DirectionType): string => {
  if(modal) {
    var modalwidth = modal.clientWidth
  if (position === DirectionType.Right) {
    if (modalwidth !== window.innerWidth) {
      return (modal.style.marginLeft = window.innerWidth - modalwidth + 'px')
    }
  }
}
return '0px'
}

// it will change the default position to the bottom and it will display the modal from the bottom
// with keeping it's size.
const changeDefaultPositiontoBottom = (position: DirectionType): string => {
  if(modal) {
    const modalheight = modal.clientHeight
  if (position === DirectionType.Bottom) {
    if (modalheight !== window.innerHeight) {
      return (modal.style.marginTop =
        ((window.innerHeight) - (modalheight)) + 'px')
    }
  }
  }
  return '0px'
}

// the div posiion before start to help it come from the right direction
const PositionConfiguration = (position) => {
  var modal = document.getElementById('modal')
  var w = modal.style.width.substring(0, modal.style.width.length - 2)
  var h = modal.style.height.substring(0, modal.style.height.length - 2)
  switch (position) {
    case 'right':
      if (modal.style.width !== '100%') {
        modal.style.marginLeft =
          parseInt(window.innerWidth) - parseInt(w) + 'px'
      }
      break
    case 'bottom':
      if (modal.style.height !== '100vh') {
        modal.style.marginTop =
          parseInt(window.innerHeight) - parseInt(h) + 'px'
      }
    default:
  }
}

// a counter will tell us this page is refreched or not.
var counter = 1

// the main of our functions is that , it will do a great job usng all the
// functions on the top.
const Direction = (direction, show, duration, position, type) => {
  if (typeof direction === 'undefined') {
    direction = 'left'
  }
  // check if the position in the right or bottom and place it on the right place
  PositionConfiguration(position)
  if (counter != 1) {
    if (direction === 'left') {
      fromLeft(show, duration, position, type)
    } else {
      if (direction === 'right') {
        fromright(show, duration, position, type)
      } else {
        if (direction === 'top') {
          fromTop(show, duration, position, type)
        } else {
          if (direction === 'bottom') {
            fromBottom(show, duration, position, type)
          } else {
            if (position === 'center' && direction === 'center') {
              toCenter(duration, show)
            } else {
              var modal = document.getElementById('modal')
              modal.style.visibility = 'hidden'
            }
          }
        }
      }
    }
  } else {
    // hide it or send it to bee unwatched but in the right corner
    makeDrawerhidden(direction)
  }
  counter++
}

// drawer from left
const Leftdrawer = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.width = 'auto'
  modal.style.height = '100vh'
  Direction('left', show, duration, 'left', 'drawer')
}

// srawer from right
const Rightdrawer = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.width = 'auto'
  modal.style.height = '100vh'
  Direction('right', show, duration, 'right', 'drawer')
}

// drawer from top
const Topdrawer = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.height = 'auto'
  modal.style.width = '100%'
  Direction('top', show, duration, 'top', 'drawer')
}

// show drawer from bottom with auto height
const Bottomdrawer = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.height = 'auto'
  modal.style.width = '100%'
  Direction('bottom', show, duration, 'bottom', 'drawer')
}

const modal = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.height = 'auto'
  modal.style.width = 'auto'
  Direction('center', show, duration, 'center', '')
}

const modaLLeftTop = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('left', show, duration, 'top', 'modal')
}

const modalTopLeft = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('top', show, duration, 'left', 'modal')
}

const modalTopRight = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('top', show, duration, 'right', 'modal')
}

const modalRightTop = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('right', show, duration, 'top', 'modal')
}

const modalBottomLeft = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('bottom', show, duration, 'left', 'modal')
}

const modalBottomRight = (show, duration) => {
  var modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('bottom', show, duration, 'right', 'modal')
}

const modalLeftBottom = (show, duration) => {
  const modal = document.getElementById('modal')
  modal.style.maxHeight = '40%'
  modal.style.maxWidth = '45%'
  Direction('left', show, duration, 'bottom', 'modal')
}

const modalRightBottom = (show: boolean, duration: number) => {
  const modal: HTMLElement | null = document.getElementById('modal')
  if (modal) {
    modal.style.maxHeight = '40%'
    modal.style.maxWidth = '45%'
  }
  Direction(
    DirectionType.Right,
    show,
    duration,
    DirectionType.Bottom,
    ModalType.Modal
  )
}

const modalstyle = (position: Position) => {
  const modal: HTMLElement | null = document.getElementById('modal')
  if (modal) {
    switch (position) {
      case Position.LeftTop:
        modal.style.marginTop = '10px'
        modal.style.marginLeft = '10px'
        break
      case Position.LeftBottom:
        modal.style.marginTop =
          parseInt(
            modal.style.marginTop.substring(0, modal.style.marginTop.length - 2)
          ) -
          20 +
          'px'
        modal.style.marginLeft = '20px'
        break
      case Position.RightTop:
        modal.style.marginTop = '20px'
        modal.style.marginLeft =
          parseInt(
            modal.style.marginLeft.substring(
              0,
              modal.style.marginLeft.length - 2
            )
          ) -
          20 +
          'px'
        break
      case Position.RightBottom:
        modal.style.marginTop =
          parseInt(
            modal.style.marginTop.substring(0, modal.style.marginTop.length - 2)
          ) -
          20 +
          'px'
        modal.style.marginLeft =
          parseInt(
            modal.style.marginLeft.substring(
              0,
              modal.style.marginLeft.length - 2
            )
          ) -
          20 +
          'px'
        break
      default:
        modal.style.marginTop = '10px'
        modal.style.marginLeft = '10px'
        break
    }
  }
}

// start all function and the job of the component
const Start = (
  direction: string,
  show: boolean,
  duration: number,
  position: string,
  type: ModalType
): void => {
  switch (type) {
    case ModalType.Modal:
      modal(show, duration)
      break
    case ModalType.DrawerLeft:
      Leftdrawer(show, duration)
      break
    case ModalType.DrawerRight:
      Rightdrawer(show, duration)
      break
    case ModalType.DrawerTop:
      Topdrawer(show, duration)
      break
    case ModalType.DrawerBottom:
      Bottomdrawer(show, duration)
      break
    case ModalType.ModalTopLeft:
      modalTopLeft(show, duration)
      break
    case ModalType.ModalLeftTop:
      modaLLeftTop(show, duration)
      break
    case ModalType.ModalRightTop:
      modalRightTop(show, duration)
      break
    case ModalType.ModalTopRight:
      modalTopRight(show, duration)
      break
    case ModalType.ModalLeftBottom:
      modalLeftBottom(show, duration)
      break
    case ModalType.ModalBottomLeft:
      modalBottomLeft(show, duration)
      break
    case ModalType.ModalRightBottom:
      modalRightBottom(show, duration)
      break
    case ModalType.ModalBottomRight:
      modalBottomRight(show, duration)
      break
    default:
      Direction(direction, show, duration, position, '')
      break
  }
}

export default { Start }
