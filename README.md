# react-screen-modal

>create a drawer or modal , you can customize the size and the position (corner) and the direction (from where it will display), control size of the Drawer/modal (full screen , 100px ,400px ...).

[![NPM](https://img.shields.io/npm/v/react-screen-modal.svg)](https://www.npmjs.com/package/react-screen-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-screen-modal
```
## props

---------------------------------------------------------------


>type : type=> string => default => "drawer-left" with full screen size => can be (drawer-right,drawer-left,drawer-top,drawer-bottom,modal,modal-left-bottom,modal-bottom-left,modal-right-bottom,modal-right-top,modal-top-right,modal-left-top,modal-top-left,modal-bottom-right)


>duration : type => int ,default => 0  "in seconds"


>direction : type => string , default => "left" => can be  {left,right,top,bottom,center}


>position : typr => string , default => "left" | "top" => can be  {left,right,top,bottom,center}


>width : type => int | string , default => "100%"


>height : type => int | string , default => "100vh"


>show : type => boolean  ,default =>  false


>backgroundDisable : type => boolean , default => false


>color : type => string ,default => white


>onClose : type => method (void)  => requierd if backgroundDisable is true

--------------------------------------------------------------


## notes

>you can use type prop or customize the display with your own using direction and position with custom size.

>when using type the width and height are auto , to customize the size with the type prop add your div inside the CoverModal tag and set the custom width and height.

>to make it responsive use % or auto for the modal/drawer and then control the content using media queries for example.

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
    backgroundDisable={show}
    onClose={closemodal}
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
    backgroundDisable={show}
    onClose={closemodal}
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
    backgroundDisable={show}
    onClose={closemodal}
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
    backgroundDisable={show}
    onClose={closemodal}
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
    backgroundDisable={show}
    onClose={closemodal}
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
    backgroundDisable={show}
    onClose={closemodal}
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

the following example about showing modal in the top left corner from top using the type prop

```jsx
 <CoverModal
    type="modal-top-left"
   width="auto"  // by default it's 45%
   height="auto" // by default it's 40%
  duration={1}
  show={show}
  color="red"
    >

```

you can also use in type :

>modal-top-right : will display the modal in the top right corner with the top direction in open and close.

>modal-right-top :will display the modal in the top right corner with the right direction in open and close.

>modal-top-left : will display the modal in the top left corner with the top direction in open and close.

>modal-left-top : will display the modal in the top left corner with the left direction in open and close.

>modal-bottom-right:will display the modal in the bottom right corner with the bottom direction in open and close.

>modal-right-bottom:will display the modal in the bottom right corner with the right direction in open and close.

>modal-bottom-left:will display the modal in the bottom left corner with the bottom direction in open and close.

>modal-left-bottom:will display the modal in the bottom left corner with the left direction in open and close.

>modal : will display the modal in the center .




## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
