import React ,{useState} from 'react'
import { CoverModal,DrawerItem,Modal } from 'react-screen-modal'

const App = () => {

const [show,setshow]=useState(false)
const [showw,setshoww]=useState(false)


// change to false
const openmodal=()=>{
  setshow(true);
}
const openmodalw=()=>{
  setshoww(true);
}

//change to true
const closemodal =()=>{
  setshow(false)
}
const closemodalw =()=>{
  setshoww(false)
}

    return <div>
    <button style={{ position:"absolute",alignSelf:"center" }} onClick={()=>openmodal()}>open modal</button>
    <br/>
    <button style={{ position:"absolute",alignSelf:"center" }} onClick={()=>openmodalw()}>open modal</button>

{/* start ====> call the modal anywhere */}

<CoverModal
type="drawer-left"
show={show}
backgroundDisable={show}
onClose={closemodal}
color="red"
duration={1}
>
<p>soooome text</p>
</CoverModal>

<Modal
show={showw}
onClose={closemodalw}
closeButton={true}
>
{/* your content here */}
</Modal>

      </div>
}

export default App
