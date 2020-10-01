import React ,{useState} from 'react'
import { CoverModal } from 'react-screen-modal'


const App = () => {

const [show,setshow]=useState(false)


// change to false
const openmodal=(position,direction,color,width,height,duration)=>{
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
      justifyContent:"space-around" ,
      alignItems:"center",
      height:"100vh" }} >

   <button style={{ position:"absolute",alignSelf:"center" }} onClick={()=>openmodal()}>open modal</button>


    </div>

{/* start ====> call the modal anywhere */}
  <CoverModal
    width={500}
    height={300}
    direction="center" //default is left
    position="center"
    duration={1}
    show={show}
    onClose={closemodal}
    color="aqua"
    >
{/* the content must be changed by your own */}

<div style={{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"100%"
}}>

you can add drawer content here
<input type="button" onClick={()=>closemodal()} value="Close it" />

</div>

    </CoverModal>
      </div>
}

export default App
