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

  <div style={{ display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center",height:"100vh" }} >

   <button style={{ width:200,color:"green" }} onClick={()=>openmodal()} >show</button>

  </div>
{/* start ====> call the modal anywhere */}
  <CoverModal
    show={show}
    onClose={closemodal}
    color="red"
    closeButtonColor="#fff"
    closeButtonRight={false} >
{/* the content must be changed by your own */}
    <form>
    <input type="email" placeholder="email" /><br/>
    <input type="password" placeholder="password" /><br/>
    <input type="submit" value="submit" />
    </form>

    </CoverModal>
      </div>
}

export default App
