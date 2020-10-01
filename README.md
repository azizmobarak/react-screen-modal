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


>direction : type => string , default => "left" => can be  {left,right,top,bottom,center}


>position : typr => string , default => "left" | "top" => can be  {left,right,top,bottom,center}


>width : type => int | string , default => "100%"


>width : type => int | string , default => "100vh"


>show : type => boolean  ,default =>  false


>onClose : type => void    -----


>color : type => string ,default => white


--------------------------------------------------------------


## notes

>put center in both direction and position to centralize the modal


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
<<<<<<< HEAD
    width={500}
    height={500}
    direction="left"
    position="bottom"
    duration={2}
    show={show}
    onClose={closemodal}
    color="red"
    closeButtonColor="#fff"
   closeButtonRight={false}
    >
{/* the content must be changed by your ownt */}
=======
    width={500}                    
    height={500}                  
    direction="left"              
    position="bottom"             
    duration={2}                  
    show={show}                   
    onClose={closemodal}       
    color="red"                       
    >
    
{/* the content must be changed by your own */}
>>>>>>> 746aaa4b9655b417c36cd33359b9d225a81f10e1

<input type="button" onClick={()=>closemodal()} value="Close it" />

  </CoverModal>
    
    
    </div>
  )
}

export default App

```

## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
