import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Play from './components/Play'
import Display from './components/Display'
import { PlayerContext } from './context/playerContext'




const App = () => {

  const {audioRef,track} = useContext(PlayerContext);
  return( 
    <div className="h-screen bg-black">
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Play/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
    )
}

export default App