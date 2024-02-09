import React from 'react'
import Navbar from './component/Navbar'
import Sidebar1 from './component/Sidebar1'

  // import { BrowserRouter} from 'react-router-dom'
  import DataTable from './component/DataTable'
  import './index.css'
  <meta
  name='viewpoint' content='width=device,initial-scale=1.0'></meta>


function App() {
  return (
    <div>
      <div className='Main'>
        <Navbar /></div>
    <div className=''>
    <Sidebar1/>
    <DataTable/>
    </div>
    
   


  
      
{/* <BrowserRouter>
<DataTable/>
</BrowserRouter> */}
    </div>
  )
}

export default App
