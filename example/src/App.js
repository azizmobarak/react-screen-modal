import React ,{useState} from 'react'
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

    return <div>

  <div style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center" ,
    alignItems:"center",
    height:"100vh" }} >


   <button style={{ width:200,color:"green" }} onClick={()=>openmodal()} >show</button>
   website content
   content here
  </div>
{/* start ====> call the modal anywhere */}
  <CoverModal
    width={300}
    direction="top" //default is left
    duration={1}
    show={show}
    onClose={closemodal}
    color="dodgerblue"
   // closeButtonColor="#fff"
    closeButtonRight={false}
    >
{/* the content must be changed by your own */}

    <input type="button" onClick={()=>closemodal()} value="Close it" />
     drawer content
    </CoverModal>
      </div>
}

export default App
