# react-screen-modal

>create a drawer or modal , you can customize the size and the position (corner) and the direction (from where it will display), control size of the Drawer/modal (full screen , 100px ,400px ...).

[![NPM](https://img.shields.io/npm/v/react-screen-modal.svg)](https://www.npmjs.com/package/react-screen-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-screen-modal
```
## props

---------------------------------------------------------------


>type : type=> string => default => "drawer-left" with full screen size ,can be (drawer-right,drawer-left,drawer-top,drawer-bottom,modal)


>duration : type => int ,default => 0  "in seconds"


>direction : type => string , default => "left" => can be  {left,right,top,bottom,center}


>position : typr => string , default => "left" | "top" => can be  {left,right,top,bottom,center}


>width : type => int | string , default => "100%"


>height : type => int | string , default => "100vh"


>show : type => boolean  ,default =>  false



>color : type => string ,default => white


--------------------------------------------------------------


## notes

>put center in both direction and position to centralize the modal
>it's a drawer first , but can be a modal with centralize of direction and position options


## Usage

you can use width and height width position and direction to customize the modal/drawer

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
    width={500}
    height={500}
    direction="ceneter"
    position="center"
    duration={2}
    show={show}
    color="red"
    >
{/* the content must be changed by your ownt */}

<input type="button" onClick={()=>closemodal()} value="Close it" />

  </CoverModal>


    </div>
  )
}

export default App

```


you can also use type :



drawer from the left of screen



```jsx

<CoverModal
    type="drawer-left"
    duration={1}
    show={show}
    color="aqua"
    >
    {/*your content here*/}
</CoverModal>
```


drawer from the right of  screen



```jsx

<CoverModal
    type="drawer-right"
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


drawer from the top of  screen



```jsx

<CoverModal
    type="drawer-top"
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


drawer from the bottom of screen



```jsx

<CoverModal
    type="drawer-bottom"
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```




a modal from the top of screen



```jsx

<CoverModal
    type="modal"
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```



a modal in the left top corner (top left)



```jsx

<CoverModal
    width={300}
    height={200}
    direction="left" //top
    position="top"  // left
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a full screen drawer from left



```jsx

<CoverModal
    direction="left"
    duration={1}
    show={show}
    onClose={closemodal}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a full screen drawer from top



```jsx

<CoverModal
    direction="top"
    duration={1}
    show={show}
    onClose={closemodal}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a full screen drawer from bottom



```jsx

<CoverModal
    direction="bottom"
    duration={1}
    show={show}
    onClose={closemodal}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a full screen drawer from right



```jsx

<CoverModal
    direction="right"
    duration={1}
    show={show}
    onClose={closemodal}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```



a modal in the left bottom corner (bottom left)




```jsx

<CoverModal
    width={300}
    height={200}
    direction="left" // bottom
    position="bottom" //left
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a modal in the right top corner (top right)



```jsx

<CoverModal
    width={300}
    height={200}
    direction="right" // top
    position="top" //right
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```


a modal in the right bottom corner (bottom right)



```jsx

<CoverModal
    width={300}
    height={200}
    direction="right"  // bottom
    position="bottom" // right
    duration={1}
    show={show}
    color="aqua"
    >
{/*your content here*/}
</CoverModal>
```



## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
