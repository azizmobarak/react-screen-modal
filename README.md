# react-screen-modal

> full screen modal to show content in the top of all pages elements with few code and without need of anu css , customize your modal colors and content.

[![NPM](https://img.shields.io/npm/v/react-screen-modal.svg)](https://www.npmjs.com/package/react-screen-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-screen-modal
```
## props

---------------------------------------------------------------

>duration : type => int ,default => 0  "in seconds"


>direction : type => string , default => "left"


>width : type => int | string , default => "100%"


>show : type => boolean  ,default =>  false


>onClose : type => void    -----


>color : type => string ,default => white


>closeButtonColor : type => string default => black


>closeButtonRight : type => boolean ,default=>false

--------------------------------------------------------------





## Usage

```jsx
import React,{useState} from 'react'
import { CoverModal } from 'react-screen-modal'


const App = () => {

const [show,setshow]=useState(false)

// show
const openmodal=()=>{
  setshow(true);
}
// hide
const closemodal =()=>{
  setshow(false)
}

  return (
    <div>

  <div style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center" ,
    alignItems:"center",
    height:"100vh" }} >

   {/* button to show and close the drawer */}
   <button style={{ width:200,color:"green" }} onClick={()=>openmodal()} >show</button>

  </div>
     <CoverModal
    width={500} // default is 100%
    direction="left" // default is left
    duration={2}  // default is 0 in seconds
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
    </div>
  )
}

export default App

```

## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
