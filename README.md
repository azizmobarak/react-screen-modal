# react-screen-modal

> full screen modal to show content in the top of all pages elements with few code and without need of anu css , customize your modal colors and content.

[![NPM](https://img.shields.io/npm/v/react-screen-modal.svg)](https://www.npmjs.com/package/react-screen-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-screen-modal
```
## props

---------------------------------------------------------------


props----------|----type--|--default--|----------


show-----------| boolean  |  false


onClose---------|   void   |  -----


color-----------| string   |       white


closeButtonColor-| string   |      black


closeButtonRight-| boolean  |       false

--------------------------------------------------------------





## Usage

```jsx
import React,{useState} from 'react'
import { CoverModal } from 'react-screen-modal'


const App = () => {

const [show,setshow]=useState(false)

// change to false
const openmodal=()=>{
  setshow(true);
}
//change to true
const closemodal =()=>{
  setshow(false)
}

  return (
    // add it inside comppnenet or alone
     <CoverModal
    width={500} // default is 100%
    direction="left" // default is left
    duration={2}  // default is 0
    show={show}   // required
    onClose={closemodal}  // required
    color="red"  // default is white
    closeButtonColor="#fff"  // default is black
   closeButtonRight={false}  // default is hidden
    >
{/* the content must be changed by your own
    default content will display in cnenter using flex box
    for customization add your <div> tag with 100% width and 100 height
*/}

<input type="button" onClick={()=>closemodal()} value="Close it" />

    </CoverModal>
  )
}

export default App

```

## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
