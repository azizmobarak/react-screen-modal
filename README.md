# react-screen-modal

> full screen modal to show content in the top of all pages elements with few code and without need of anu css , customize your modal colors and content.

[![NPM](https://img.shields.io/npm/v/react-screen-modal.svg)](https://www.npmjs.com/package/react-screen-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-screen-modal
```
## props

---------------------type-----|-----default--------|----------

show               | boolean  |      false         |

-------------------------------------------------------------

onClose            |   void   |   --------------   |

--------------------------------------------------------------

color              | string   |       white        |

--------------------------------------------------------------

closeButtonColor   | string   |      black         |

--------------------------------------------------------------

closeButtonRight   | boolean  |       false        |

--------------------------------------------------------------





## Usage

```jsx
import React,{useState} from 'react'
import { CoverModal } from 'react-screen-modal'


const App = () => {

const [show,showmodal]=useState(false)

// change to false
const openmodal=()=>{
  showmodal(true);
}

//change to true
const closemodal =()=>{
  showmodal(false)
}

    return <div>

  <div style={{ display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center",height:"100vh" }} >

   <button style={{ width:200,color:"green" }} onClick={()=>openmodal()} >show</button>

  </div>
{/* start ====> call the modal anywhere */}
  <CoverModal
    show={show}
    onClose={closemodal}
    color = "aqua"
    closeButtonColor="#fff"
    closeButtonRight={true} >
{/* the content must be changed by your own */}
{/*Example*/}
    <form>
    <input type="email" placeholder="email" /><br/>
    <input type="password" placeholder="password" /><br/>
    <input type="submit" value="submit" />
    </form>

    </CoverModal>
      </div>
}

export default App

```

## License

azizmobarak © [azizmobarak](https://github.com/azizmobarak)
