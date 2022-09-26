import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [showMole, setShowMole] = useState(false)
    const handleClick = (e) =>{
        props.setScore(props.score + 1)
        setShowMole(false)
    }

    let displayMole = showMole ? <Mole setDisplayMole={setShowMole} handleClick={handleClick}/> : <EmptySlot setDisplayMole={setShowMole}/>;
    
    return (
        <div>
            <h2> Mole Container </h2>
            {displayMole}
        </div>
    )
}

export default MoleContainer 