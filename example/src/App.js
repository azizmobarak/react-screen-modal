import React, { useState } from 'react'

import { CoverModal } from 'react-screen-modal'

const App = () => {

const [show,showmodal]=useState(false)

const openmodal=()=>{
  showmodal(true);
}
const closemodal =()=>{
  showmodal(false)
}

    return <div>

  <div style={{ display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center",height:"100vh" }} >

   <button style={{ width:200,color:"green" }} onClick={()=>openmodal()} >show</button>

  </div>

  <CoverModal
    show={show}
    onClose={closemodal}
    color = "aqua"
    closeButtonColor="#fff"
    closeButtonRight={true} >

    <form>
    <input type="email" placeholder="email" /><br/>
    <input type="password" placeholder="password" /><br/>
    <input type="submit" value="submit" />
    </form>

    </CoverModal>
      </div>
}

export default App
